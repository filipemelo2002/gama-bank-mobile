import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px;
  margin-top: 80px;
  background: #FBFBFB;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  color: #1D1D1D;
  text-align: center;
  margin-bottom: 60px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 30px;
  border-bottom-width: 1px;
  border-color: #878686;
  margin-bottom: 50px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: #878686;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #68DE5A;
  border-radius: 20px;
  padding: 16px 24px;
  margin-bottom: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  font-weight: 600;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LinkText = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Medium';
  color: #8C52E5;
  padding: 8px 0;
  margin-right: 2px;
`;