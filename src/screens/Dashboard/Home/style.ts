import styled, {css} from 'styled-components/native';
import { Platform } from 'react-native';

interface IBalanceTextProps {
  type: 'income' | 'outcome';
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

interface IInformationTextProps {
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
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
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Medium';
  color: #9B9B9B;
  margin-left: 8px;
`;

export const BalanceText = styled.Text<IBalanceTextProps>`
  font-size: 28px;
  font-family: 'Roboto-Medium';
  color: ${props => props.type === 'income' ? '#34A6E7' : '#F45F5F'};
  ${props => props.margin && css`
    margin-top: ${props.margin.top ? props.margin.top : 0 }px;
    margin-right: ${props.margin.right ? props.margin.right : 0 }px;
    margin-bottom: ${props.margin.bottom ? props.margin.bottom : 0 }px;
    margin-left: ${props.margin.left ? props.margin.left : 0 }px;
  ` }
`;

export const BalanceDetails = styled.View`
  align-items: center;
`;

export const InformationText = styled.Text<IInformationTextProps>`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #9B9B9B;
  ${props => props.margin && css`
    margin-top: ${props.margin.top ? props.margin.top : 0 }px;
    margin-right: ${props.margin.right ? props.margin.right : 0 }px;
    margin-bottom: ${props.margin.bottom ? props.margin.bottom : 0 }px;
    margin-left: ${props.margin.left ? props.margin.left : 0 }px;
  ` }
`;

export const DividerHorizontal = styled.View`
  align-self: center;
  height: 1px;
  width: 90%;
  background: #878686;
  margin: 24px 0;
`;

export const DividerVertical = styled.View`
  align-self: center;
  height: 20px;
  width: 1px;
  background: #878686;
  margin: 12px 0;
`;