import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import * as Creators from '../../../redux/action/planning';
import { showError, showSuccess } from '../../../services/showToast';

import { 
  Container,
  Content,
  HeaderContent,
  HeaderTitle,
  InputContainer,
  Input,
  Picker,
  Button,
  ButtonText,
  InformationText,
  PlanText,
  DividerHorizontal,
} from './style';

const Plans: React.FC = () => {
  const dispatch = useDispatch();
  const { login, nome } = useSelector((state: State) => state.auth.usuario);
  const plannings = useSelector((state: State) => state.planning.plannings);
  const [plans, setPlans] = useState<Planning[] | undefined>([]);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('R');

  useEffect(() => {
    dispatch(Creators.loadData(login));
  }, []);

  useEffect(() => {
    setPlans(plannings);
  }, [plannings]);

  const handleSubmit = useCallback(
    async () => {

      if (description === '' || type === '') {
        showError('Por favor, preencha todos os campos');
        return;
      }

      const formData = {
        descricao: description,
        tipoMovimento: type,
        login,
      };

      dispatch(Creators.create(formData));
      dispatch(Creators.loadData(login));
      setDescription('');
      showSuccess('Plano criado com sucesso.');
    },
    [description, type],
  );

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
              <Icon name="book" size={16} color="#9B9B9B" />
              <HeaderTitle>Adicionar novo plano</HeaderTitle>
            </HeaderContent>
            <InputContainer>
              <Input 
                placeholder="Descrição"
                value={description}
                onChangeText={text => setDescription(text)}
              />
            </InputContainer>
            <InputContainer>
              <Picker 
                selectedValue={type}
                onValueChange={(itemValue) => {setType(itemValue)
                   console.log(itemValue)}}
              >
                <Picker.Item label="Receita" value="R" />
                <Picker.Item label="Despesa" value="D" />
              </Picker>
            </InputContainer>
            <Button onPress={handleSubmit}>
              <ButtonText>Adicionar plano</ButtonText>
              <Icon name="arrow-right" size={24} color="#FFF" />
            </Button>
          </Content>
          <Content>
            <HeaderContent>
              <Icon name="book-open" size={16} color="#9B9B9B" />
              <HeaderTitle>Planos de conta</HeaderTitle>
            </HeaderContent>
            {plans &&
            plans.map(plan => (
              <View key={plan.id}>
                {plan.tipoMovimento === 'R' 
                  ? (
                    <>
                      <PlanText type="revenue" >{plan.descricao}</PlanText>
                      <InformationText >Receita</InformationText>
                      <DividerHorizontal />
                    </>
                  ) 
                  : (
                    <>
                      <PlanText type="expense">{plan.descricao}</PlanText> 
                      <InformationText>Despesa</InformationText>
                      <DividerHorizontal />
                    </>
                  ) 
                }

              </View>
            ))}
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Plans;