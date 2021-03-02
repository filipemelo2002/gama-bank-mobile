import styled from 'styled-components/native';

interface IPlanTextProps {
  type: 'revenue' | 'expense';
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 60px 30px 40px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: 'Roboto-Medium';
  color: #FBFBFB;
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

export const InformationText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #9B9B9B;
`;

export const PlanText = styled.Text<IPlanTextProps>`
  font-size: 24px;
  font-family: 'Roboto-Medium';
  color: ${props => props.type === 'revenue' ? '#34A6E7' : '#F45F5F'};
`;

export const DividerHorizontal = styled.View`
  align-self: center;
  height: 1px;
  width: 90%;
  background: #878686;
  margin: 24px 0;
`;