import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StatusBar, KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
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
import * as Creators from '../../redux/action/login'
import { showError } from '../../services/showToast';
const SignIn: React.FC = () => {
  const dispatch = useDispatch()

  const navigator = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, loading } = useSelector((state:State) => state.auth)

  async function handleSubmit() {

    if(username === '' || password === ''){
      showError("Por favor, preencha todos os campos!")

      return;
    }

    const postData = {
      senha: password,
      usuario: username,
    }

    try {
      dispatch(Creators.signIn(postData))
    }catch(err) {
      showError("Ops, usuário ou senha incorretos. Tente novamente!")
    }

  }

  const handleRecoveryPassword = useCallback(() => {
    navigator.navigate('recoverypassword');
  }, []);

  const handleSignUp = useCallback(() => {
    navigator.navigate('signup');
  }, []);

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
            <Content>
              <Title>Seja bem vindo, informe seus dados para logar.</Title>
              <InputContainer>
                <Input 
                  placeholder="Digite seu usuário" 
                  autoCapitalize="none"
                  value={username} 
                  onChangeText={text => setUsername(text)}
                />
              </InputContainer>
              <InputContainer>
                <Input 
                  placeholder="Digite sua senha" 
                  autoCapitalize="none"
                  secureTextEntry={true}
                  value={password} 
                  onChangeText={text => setPassword(text)}
                />
              </InputContainer>
              <Button onPress={handleSubmit} disabled={loading}>
                {loading 
                  ? (<ActivityIndicator size="small" color="#8C52E5" style={{flex: 1, alignSelf: 'center'}} />) 
                  : (
                    <>
                      <ButtonText>Continuar</ButtonText>
                      <Icon name="arrow-right" size={24} color="#FFF" />
                    </>
                    )
                }
              </Button>
              <Link onPress={handleRecoveryPassword}>
                <LinkText>Esqueci minha senha</LinkText>
                <Icon name="chevron-right" size={12} color="#8C52E5" />
              </Link>
              <Link onPress={handleSignUp}>
                <LinkText>Ainda não sou cliente</LinkText>
                <Icon name="chevron-right" size={12} color="#8C52E5" />
              </Link>
            </Content>
          </Container>
          
        </ScrollView>
      </KeyboardAvoidingView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}

export default SignIn;