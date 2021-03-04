import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux'
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
  const { contaBanco, contaCredito } = useSelector((state:State)=>state.dashboard)
  function formatPrice(value:number) {
    
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }
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
            {
              contaBanco.lancamentos.map(lancamento => (
                <BalanceDetails key={String(lancamento.id)}>
                  <BalanceText type={lancamento.tipo==="R"?"income":"outcome"}>- {formatPrice(lancamento.valor)}</BalanceText>
                  <InformationText>{lancamento.data}</InformationText>
                  <DividerVertical />
                </BalanceDetails>
              ))
            }

            {
              contaCredito.lancamentos.map(lancamento => (
                <BalanceDetails key={String(lancamento.id)}>
                  <BalanceText type={lancamento.tipo==="R"?"income":"outcome"}>- {formatPrice(lancamento.valor)}</BalanceText>
                  <InformationText>{lancamento.data}</InformationText>
                  <DividerVertical />
                </BalanceDetails>
              ))
            }
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Extract;