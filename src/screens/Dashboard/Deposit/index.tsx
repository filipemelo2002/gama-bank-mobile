import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { showError, showSuccess } from '../../../services/showToast';
import * as Creators from '../../../redux/action/planning';

import { 
  Container,
  Content,
  HeaderContent,
  HeaderTitle,
  InputContainer,
  Input,
  Button,
  ButtonText,
} from './style';
import { maskMoney } from '../../../utils/masks';
import { Label } from '../../../components/UserDrawer/style';

const Deposit: React.FC = () => {
  const dispatch = useDispatch();
  const plannings = useSelector((state: State) => state.planning.plannings);
  const [plans, setPlans] = useState<Planning[] | undefined>([]);
  const [planoConta, setPlanoConta] = useState(0);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const { ...account } = useSelector((state: State) => {
    return state.dashboard;
  });
  const { login } = useSelector((state: State) => state.auth.usuario);

  useEffect(() => {
    dispatch(Creators.loadData(login));
  }, []);

  useEffect(() => {
    setPlans(plannings);
  }, [plannings]);

  const handleOnSubmit = async () => {

    if (description.length === 0) {
      showError('Prencha o campo de descrição');
      return 0;
    }

    const formatValue = value.replace('R$' , '').replace(',' , '.');

    if (formatValue.length <= 4 || Number(formatValue.replace('.', '')) === 0) {
      showError('Preencha o campo de valor corretamente');
      return 0;
    }
    setDescription('');
    setValue('');

    const planDefault = plans?.find(plan => plan.tipoMovimento === 'R');
    
    if(planDefault?.id){
      showSuccess('Deposito realizado.')
      await dispatch(
        Creators.transaction({
          conta: account.contaBanco.id,
          contaDestino: login,
          data: new Date(Date.now()).toISOString().split('T')[0],
          descricao: description,
          valor: formatValue,
          login,
          planoConta: planDefault.id,
        }),
      );
    } else {
      showError('Ocorreu um erro tente novamente mais tarde');
    }


  };

  function handleMask(value: string){
    setValue(maskMoney(value))
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
              <HeaderTitle>Depósitos</HeaderTitle>
            </HeaderContent>
            <InputContainer>
              <Input 
                placeholder="Descrição"
                value={description}
                onChangeText={text => setDescription(text)}
              />
            </InputContainer>
            <InputContainer>
              <Input 
                placeholder="Data" 
                value={new Date().toISOString().split('T')[0]}
              />
            </InputContainer>
            <InputContainer>
              <Input 
                placeholder="Valor de deposito em R$"
                keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"}  
                value={value}
                onChangeText={text => handleMask(text)}
              />
            </InputContainer>
            <Button onPress={handleOnSubmit}>
              <ButtonText>Realizar depósito</ButtonText>
              <Icon name="arrow-right" size={24} color="#FFF" />
            </Button>
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Deposit;