import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';
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

const RecoveryPassword: React.FC = () => {
  const navigator = useNavigation();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);

    if (username === '' || password === '') {
      Toast.show({
        type: 'error',
        text1: '',
        text2: 'Preencha corretamente os campos',
        topOffset: 60,
      });

      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: '',
        text2: 'Senhas não coincidem.',
        topOffset: 60,
      });
      
      setIsLoading(false);
      return;
    }

    const postDataNovaSenha = {
      email: 'fake@mail.com',
      login: username,
    };

    const postDataAlteraSenha = {
      senha: password,
      usuario: username,
    };

    try{
      const response = await api.post('nova-senha', postDataNovaSenha);
      await api.post(`altera-senha?senhaTemporaria=${response.data}`, postDataAlteraSenha)
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setIsLoading(false);
      navigator.navigate('signin');
    }catch(err){
      Toast.show({
        type: 'error',
        text1: '',
        text2: 'Ocorreu um erro tente novamente mais tarde',
      });
      setIsLoading(false);
    }
  };

  const handleGoBack = useCallback(() => {
    navigator.navigate('signin');
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
              <Title>Redefinir senha</Title>
              <InputContainer>
                <Input 
                  placeholder="Nome de usuário"
                  autoCapitalize="none"
                  value={username}
                  onChangeText={text => setUsername(text)}
                />
              </InputContainer>
              <InputContainer>
                <Input 
                  placeholder="Nova senha"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </InputContainer>
              <InputContainer>
                <Input 
                  placeholder="Confirmar nova senha"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
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
              <Link onPress={handleGoBack}>
                <Icon name="chevron-left" size={12} color="#8C52E5" />
                <LinkText>Voltar para login</LinkText>
              </Link>
              <Link onPress={handleSignUp}>
                <LinkText>Ainda não sou cliente</LinkText>
              </Link>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}

export default RecoveryPassword;