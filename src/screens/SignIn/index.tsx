import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform, View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Content, Title, InputContainer, Input, Button, ButtonText, Link, LinkText } from './style';

import logoGamaBank from '../../images/gamabank.png';

const SignIn: React.FC = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView style={{paddingTop: StatusBar.currentHeight }}>
        <Container>
          <Image source={logoGamaBank} />
          <Content>
            <Title>Seja bem vindo, informe seus dados para logar.</Title>
            <InputContainer>
              <Input placeholder="Digite seu usuário" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Digite sua senha" />
            </InputContainer>
            <Button>
              <ButtonText>Continuar</ButtonText>
              <Icon name="arrow-right" size={24} color="#FFF" />
            </Button>
            <Link>
              <LinkText>Esqueci minha senha</LinkText>
              <Icon name="chevron-right" size={12} color="#8C52E5" />
            </Link>
            <Link>
              <LinkText>Ainda não sou cliente</LinkText>
              <Icon name="chevron-right" size={12} color="#8C52E5" />
            </Link>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignIn;