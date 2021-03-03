import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container,
  Content,
  HeaderContent,
  HeaderTitle,
  BalanceText,
  BalanceDetails,
  InformationText,
  DividerVertical,
} from './style';

const Extract: React.FC = () => {

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
            <DividerVertical />
            <BalanceDetails>
              <BalanceText type="income">R$ 22,50</BalanceText>
              <InformationText>11 de Fev.</InformationText>
            </BalanceDetails>
            <DividerVertical />
            <BalanceDetails>
              <BalanceText type="outcome">- R$ 22,50</BalanceText>
              <InformationText>11 de Fev.</InformationText>
            </BalanceDetails>
            <DividerVertical />
            <BalanceDetails>
              <BalanceText type="income">R$ 22,50</BalanceText>
              <InformationText>11 de Fev.</InformationText>
            </BalanceDetails>
            <DividerVertical />
            <BalanceDetails>
              <BalanceText type="income">R$ 22,50</BalanceText>
              <InformationText>11 de Fev.</InformationText>
            </BalanceDetails>
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Extract;