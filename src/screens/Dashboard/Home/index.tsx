import React, { useCallback, useEffect } from 'react';
import { RefreshControl, StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux'
// require("intl/locale-data/jsonp/pt-BR");
import 'intl';
import 'intl/locale-data/jsonp/en';
import { 
  Container,
  Content,
  HeaderContent,
  HeaderTitle,
  BalanceText,
  BalanceDetails,
  InformationText,
  DividerHorizontal,
  DividerVertical,
} from './style';
import * as Creators from '../../../redux/action/dashboard'
const Home: React.FC = () => {
  const disptach = useDispatch()
  const { usuario } = useSelector((state:State)=> state.auth)
  const { loading, contaBanco, contaCredito, plans } = useSelector((state:State)=>state.dashboard)
  function formatPrice(value:number) {
    
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  const loadData = useCallback(()=>{
    const now = new Date();
    const fim = now.toISOString().split('T')[0];
    now.setDate(now.getDate() - 30);
    const inicio = now.toISOString().split('T')[0];    

    disptach(Creators.loadData({
      login: usuario.login,
      fim,
      inicio,
    }))
    disptach(Creators.getPlans(usuario.login))
  }, [])

  useEffect(()=> {
    loadData()
  }, [loadData])

  const incoming = () => {
    const incominArray = contaBanco.lancamentos.filter(lancamentos=>lancamentos.tipo==="R")
    if(incominArray.length===0){
      return 0
    }
    const sumValues: number = incominArray.reduce((sum, current)=> current.valor + sum, 0)
    return sumValues
  }
  const outcome = () => {
    const incominArray = contaBanco.lancamentos.filter(lancamentos=>lancamentos.tipo==="D")
    if(incominArray.length===0){
      return 0
    }
    const sumValues: number = incominArray.reduce((sum, current)=> current.valor + sum, 0)
    return sumValues
  }
  // if(loading){
  //   return (
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
  //       <ActivityIndicator size='large' color="#fff"/>
  //     </View>
  //   )
  // }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView style={{ paddingTop: StatusBar.currentHeight }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadData}/>
        }
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
       <Container>
          <Content>
            <HeaderContent>
              <Icon name="dollar-sign" size={16} color="#9B9B9B" />
              <HeaderTitle>Saldo da conta</HeaderTitle>
            </HeaderContent>
            <BalanceText type="income" margin={{top: 12, bottom: 12}} >{formatPrice(contaBanco.saldo)}</BalanceText>
            <InformationText>Lançamentos de débito: R$ 22,50</InformationText>
          </Content>
          <Content>
            <HeaderContent>
              <Icon name="dollar-sign" size={16} color="#9B9B9B" />
              <HeaderTitle>Planos de conta</HeaderTitle>
            </HeaderContent>

            <InformationText margin={{top: 32}} >Tipo do plano: Receita</InformationText>
            <BalanceText type="income" margin={{top: 8}}>{formatPrice(incoming())}</BalanceText>

            {/* <DividerHorizontal /> */}

            <InformationText margin={{top: 32}} >Tipo do plano: Despesa</InformationText>
            <BalanceText type="outcome" margin={{top: 8}}>{formatPrice(outcome())}</BalanceText>

          </Content>
          <Content>
            <HeaderContent>
              <Icon name="dollar-sign" size={16} color="#9B9B9B" />
              <HeaderTitle>Últimos lançamentos</HeaderTitle>
            </HeaderContent>
            {/* <DividerVertical /> */}

            {
              contaBanco.lancamentos.map(lancamento => (
                <BalanceDetails key={String(lancamento.id)}>
                  <DividerVertical />
                  <BalanceText type={lancamento.tipo==="R"?"income":"outcome"}>{formatPrice(lancamento.valor)}</BalanceText>
                  <InformationText>{lancamento.data}</InformationText>
                </BalanceDetails>
              ))
            }

            {
              contaCredito.lancamentos.map(lancamento => (
                <BalanceDetails key={String(lancamento.id)}>
                  <DividerVertical />
                  <BalanceText type={lancamento.tipo==="R"?"income":"outcome"}>{formatPrice(lancamento.valor)}</BalanceText>
                  <InformationText>{lancamento.data}</InformationText>
                </BalanceDetails>
              ))
            }
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Home;