import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  Header,
  Title,
  Content,
  HeaderContent,
  HeaderTitle,
  InputContainer,
  Input,
  Button,
  ButtonText,
  InformationText,
  PlanText,
  DividerHorizontal,
} from './style';

const Plans: React.FC = () => {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView style={{ paddingTop: StatusBar.currentHeight }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
       <Container>
          <Header>
            <Title>Olá, usuário</Title>
            <Icon name="user" size={33} color="#FFF" />
          </Header>
          <Content>
            <HeaderContent>
              <Icon name="book" size={16} color="#9B9B9B" />
              <HeaderTitle>Adicionar novo plano</HeaderTitle>
            </HeaderContent>
            <InputContainer>
              <Input placeholder="Descrição" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Tipo" />
            </InputContainer>
            <Button>
              <ButtonText>Adicionar plano</ButtonText>
              <Icon name="arrow-right" size={24} color="#FFF" />
            </Button>
          </Content>
          <Content>
            <HeaderContent>
              <Icon name="book-open" size={16} color="#9B9B9B" />
              <HeaderTitle>Planos de conta</HeaderTitle>
            </HeaderContent>
            <PlanText type="revenue" >Salário</PlanText>
            <InformationText >Receita</InformationText>
            <DividerHorizontal />
            <PlanText type="expense">Conta de Luz</PlanText> 
            <InformationText>Despesa</InformationText>
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Plans;