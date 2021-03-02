import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  Header,
  Title,
  Content,
  HeaderContent,
  HeaderTitle,
  BalanceText,
  BalanceDetails,
  InformationText,
  DividerHorizontal,
  DividerVertical,
} from './style';

const SignIn: React.FC = () => {

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
              <Icon name="dollar-sign" size={16} color="#9B9B9B" />
              <HeaderTitle>Saldo da conta</HeaderTitle>
            </HeaderContent>
            <BalanceText type="income" margin={{top: 12, bottom: 12}} >R$: 1.890,00</BalanceText>
            <InformationText>Lançamentos de débito: R$ 22,50</InformationText>
          </Content>
          <Content>
            <HeaderContent>
              <Icon name="dollar-sign" size={16} color="#9B9B9B" />
              <HeaderTitle>Planos de conta</HeaderTitle>
            </HeaderContent>
            <InformationText margin={{top: 32}}>Tipo do plano: Receita</InformationText>
            <BalanceText type="income" margin={{top: 8}}>R$: 1.890,00</BalanceText>
            <DividerHorizontal />
            <InformationText>Tipo do plano: Despesas</InformationText>
            <BalanceText type="outcome" margin={{top: 8}}>- R$: 22,50</BalanceText> 
          </Content>
          <Content>
            <HeaderContent>
              <Icon name="dollar-sign" size={16} color="#9B9B9B" />
              <HeaderTitle>Últimos lançamentos</HeaderTitle>
            </HeaderContent>
            <DividerVertical />
            <BalanceDetails>
              <BalanceText type="outcome">- R$ 22,50</BalanceText>
              <InformationText>11 de Fev.</InformationText>
            </BalanceDetails>
            <DividerVertical />
            <BalanceDetails>
              <BalanceText type="outcome">- R$ 22,50</BalanceText>
              <InformationText>11 de Fev.</InformationText>
            </BalanceDetails>
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignIn;