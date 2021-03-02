import styled, {css} from 'styled-components/native';


export const Container = styled.View`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.29);
    position: absolute;
    align-items: flex-end;
    z-index: 2;
`;

export const DrawerContainer = styled.View`
  height: 100%;
  width: 82%;
  background: #FBFBFB;
  padding: 0 40px;
`;

export const DrawerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0;
`;

export const TextContainer = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #878686;
  font-family: 'Roboto-Medium';
`;

export const UserInfoText = styled.Text`
  color: #8C52E5;
  font-size: 20px;
  font-family: 'Roboto-Medium';
`;

export const Divider = styled.View`
  align-self: center;
  height: 2px;
  width: 90%;
  background: #878686;
  margin: 24px 0 48px;
`;