import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';
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

const RecoveryPassword: React.FC = () => {

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
                <Input placeholder="Nome de usuário" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Nova senha" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Confirmar nova senha" />
              </InputContainer>
              <Button>
                <ButtonText>Continuar</ButtonText>
                <Icon name="arrow-right" size={24} color="#FFF" />
              </Button>
              <Link>
                <Icon name="chevron-left" size={12} color="#8C52E5" />
                <LinkText>Voltar para login</LinkText>
              </Link>
              <Link>
                <LinkText>Ainda não sou cliente</LinkText>
              </Link>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default RecoveryPassword;