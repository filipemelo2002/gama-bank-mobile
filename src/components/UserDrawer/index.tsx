import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform, View, Text } from 'react-native';
import {
  Container,
  DrawerContainer,
  DrawerHeader,
  TextContainer,
  Label,
  UserInfoText,
  Divider,
} from './style';
import Icon from 'react-native-vector-icons/Feather';


const UserDrawer: React.FC = () => {
  return (
    <Container>
      <DrawerContainer>
        <DrawerHeader>
          <Icon name="user" size={33} color="#8C52E5" /> 
          <Icon name="x" size={33} color="#8C52E5" />            
        </DrawerHeader>
        <TextContainer>
          <Label>Seu nome:</Label>
          <UserInfoText>Nome do Usuário</UserInfoText>
        </TextContainer>
        <TextContainer>
          <Label>Email:</Label>
          <UserInfoText>email@email.com</UserInfoText>
        </TextContainer>
        <TextContainer>
          <Label>Username:</Label>
          <UserInfoText>username</UserInfoText>
        </TextContainer>
        <TextContainer>
          <Label>CPF:</Label>
          <UserInfoText>000.000.000-00</UserInfoText>
        </TextContainer>
        <Divider />
        <TextContainer>
          <Label>Você tem</Label>
          <UserInfoText>4 planos de conta</UserInfoText>
        </TextContainer>
      </DrawerContainer>
    </Container>
  );
}

export default UserDrawer;