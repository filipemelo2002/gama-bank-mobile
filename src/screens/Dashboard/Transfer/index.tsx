import React from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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

const Transfer: React.FC = () => {

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
              <HeaderTitle>Transferências</HeaderTitle>
            </HeaderContent>
            <InputContainer>
              <Input placeholder="Destinatário" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Descrição" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Data" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Valor da transferência em R$" />
            </InputContainer>
            <Button>
              <ButtonText>Realizar transferência</ButtonText>
              <Icon name="arrow-right" size={24} color="#FFF" />
            </Button>
          </Content>
       </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Transfer;