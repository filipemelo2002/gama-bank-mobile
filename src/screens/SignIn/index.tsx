import React, { useCallback, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StatusBar, KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
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
import api from '../../services/api';
import { LoginContext } from '../../contexts/LoginContext';

const SignIn: React.FC = () => {
  const navigator = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useContext(LoginContext);

  async function handleSubmit() {
    setIsLoading(true);

    if(username === '' || password === ''){
      Toast.show({
        type: 'error',
        text1: '',
        text2: 'Preencha corretamente os campos',
        topOffset: 60,
      });

      setIsLoading(false);
      return;
    }

    const postData = {
      senha: password,
      usuario: username,
    }

    try {
      const response = await loginUser(postData);
      if(response){
      setUsername('');
      setPassword('');
      setIsLoading(false);
      navigator.navigate('dashboard');
      } else {
        throw new Error();
      }

    }catch(err) {
      Toast.show({
        type: 'error',
        text1: '',
        text2: 'Ocorreu um erro tente novamente mais tarde',
      });
      setIsLoading(false);
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
                  value={username} 
                  onChangeText={text => setUsername(text)}
                />
              </InputContainer>
              <InputContainer>
                <Input 
                  placeholder="Digite sua senha" 
                  secureTextEntry={true}
                  value={password} 
                  onChangeText={text => setPassword(text)}
                />
              </InputContainer>
              <Button onPress={handleSubmit} disabled={isLoading}>
                {isLoading 
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