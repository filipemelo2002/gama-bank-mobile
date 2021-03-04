import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


import { 
  Container, 
  Content, 
  Title, 
  InputContainer, 
  Input, 
  Button, 
  ButtonText, 
  Link, 
  LinkText } from './style';

import logoGamaBank from '../../images/gamabank.png';
import { maskCPF } from '../../utils/masks';
import SignUpSuccess from '../../components/SignUpSuccess';
import { showError } from '../../services/showToast';
import { useSelector, useDispatch } from 'react-redux'
import * as Api from '../../api/login'
const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const [cpf,setCpf] = useState('');
  const [username,setUsername] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [isOk, setIsOk] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigator = useNavigation()

  async function handleSubmit() {

    if (cpf === '' || name === '' || username === '' || password === '') {
      showError("Por favor, preencha todos os campos!")
      return;
    }

    if (password !== confirmPassword) {
      showError("Senhas não coincidem...")
      return;
    }

    const postData = {
      cpf: cpf.replace(/[^0-9]/g, ''),
      nome: name,
      login: username,
      senha: password,
    };

    try{
      setLoading(true)
      await Api.signUp(postData)
      setIsOk(true);
      setCpf('');
      setUsername('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setIsOk(true);
        navigator.navigate('signin');
      }, 1000);
    }catch(err){
      
    }
    setLoading(false)
  }

  const handleGoBack = useCallback(() => {
    navigator.navigate('signin');
  }, []);  

  function handleMaskCpf(value: string){
    setCpf(maskCPF(value));
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView style={{ paddingTop: StatusBar.currentHeight }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
          <Container>
            <Image source={logoGamaBank} />
            {!isOk
            ? (
              <Content>
                <Title>Peça sua conta e cartão de crédito do Gama Bank</Title>
                <InputContainer>
                  <Input 
                    placeholder="Digita seu CPF"
                    keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"}
                    value={cpf}
                    onChangeText={text => handleMaskCpf(text)}
                    maxLength={14}
                  />
                </InputContainer>
                <InputContainer>
                  <Input 
                    placeholder="Escolha um nome de usuário"
                    autoCapitalize="none"
                    value={username}
                    onChangeText={text => setUsername(text)}
                  />
                </InputContainer>
                <InputContainer>
                  <Input 
                    placeholder="Nome completo"
                    value={name}
                    onChangeText={text => setName(text)}
                  />
                </InputContainer>
                <InputContainer>
                  <Input 
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                </InputContainer>
                <InputContainer>
                  <Input 
                    placeholder="Confirme sua senha"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                  />
                </InputContainer>
                <Button onPress={handleSubmit} disabled={loading}>
                  {loading 
                    ? (<ActivityIndicator size="small" color="#8C52E5" style={{flex: 1, alignSelf: 'center'}} />) 
                    : (
                      <>
                        <ButtonText>Continuar</ButtonText>
                        <Icon name="arrow-right" size={24} color="#9B9B9B" />
                      </>
                      )
                  }
                </Button>
                <Link onPress={handleGoBack}>
                  <Icon name="chevron-left" size={12} color="#8C52E5" />
                  <LinkText>Voltar para login</LinkText>
                </Link>
              </Content>
            )
            : (
              <SignUpSuccess />
            )}
          </Container>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignUp;