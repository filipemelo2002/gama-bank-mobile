import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title } from './style';

const SignUpSuccess: React.FC = () => {

  return (
    <Container>
      <Icon name="thumbs-up" size={162} color="#68DE5A" />
      <Title>
        Conta criada com sucesso!
      </Title>
    </Container>
  );
}

export default SignUpSuccess;