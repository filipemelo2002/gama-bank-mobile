import React, { useContext, useEffect } from 'react';
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
import { ModalContext } from '../../contexts/ModalContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import * as Creators from '../../redux/action/dashboard'
const UserDrawer: React.FC = () => {
  const dispatch = useDispatch()
  const { closeModal } = useContext(ModalContext);
  const { usuario } = useSelector((state:State)=> state.auth)
  const {plans} = useSelector((state:State)=>  state.dashboard)

  useEffect(() => {
    dispatch(Creators.getPlans(usuario.login))
  }, []);

  return (
    <Container>
      <DrawerContainer>
        <DrawerHeader>
          <Icon name="user" size={33} color="#8C52E5" /> 
          <TouchableOpacity onPress={closeModal}>
            <Icon name="x" size={33} color="#8C52E5" />
          </TouchableOpacity>
        </DrawerHeader>
        <TextContainer>
          <Label>Seu nome:</Label>
          <UserInfoText>{usuario.nome}</UserInfoText>
        </TextContainer>
        <TextContainer>
          <Label>Email:</Label>
          <UserInfoText>{usuario.login}@gamabank.com</UserInfoText>
        </TextContainer>
        <TextContainer>
          <Label>Username:</Label>
          <UserInfoText>{usuario.login}</UserInfoText>
        </TextContainer>
        <TextContainer>
          <Label>CPF:</Label>
          <UserInfoText>{String(usuario.cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</UserInfoText>
        </TextContainer>
        <Divider />
        <TextContainer>
          <Label>Você tem</Label>
          <UserInfoText>{plans.length} planos de conta</UserInfoText>
        </TextContainer>
      </DrawerContainer>
    </Container>
  );
}

export default UserDrawer;