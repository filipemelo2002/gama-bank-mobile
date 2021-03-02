import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
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
// import SignUpSuccess from '../../components/SignUpSuccess';

const SignUp: React.FC = () => {
  const navigator = useNavigation()

  const handleSubmit = useCallback(() => {
    navigator.navigate('signin');
  }, []);

  const handleGoBack = useCallback(() => {
    navigator.navigate('signin');
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
              <Title>Peça sua conta e cartão de crédito do Gama Bank</Title>
              <InputContainer>
                <Input placeholder="Digita seu CPF" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Escolha um nome de usuário" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Nome completo" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Digite sua senha" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Confirme sua senha" />
              </InputContainer>
              <Button onPress={handleSubmit}>
                <ButtonText>Continuar</ButtonText>
                <Icon name="arrow-right" size={24} color="#9B9B9B" />
              </Button>
              <Link onPress={handleGoBack}>
                <Icon name="chevron-left" size={12} color="#8C52E5" />
                <LinkText>Voltar para login</LinkText>
              </Link>
            </Content>
            
            {/* <SignUpSuccess /> */}

          </Container>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignUp;