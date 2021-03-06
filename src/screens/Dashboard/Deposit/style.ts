import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px 40px;
`;

export const Content = styled.View`
  width: 100%;
  background: #FBFBFB;
  border-radius: 10px;
  padding: 16px 24px;
  margin-bottom: 24px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Medium';
  color: #9B9B9B;
  margin-left: 8px;
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