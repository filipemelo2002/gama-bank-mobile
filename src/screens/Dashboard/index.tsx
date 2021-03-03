import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Header, Title } from './style';

import Home from './Home';
import Extract from './Extract';
import Transfer from './Transfer';
import Deposit from './Deposit';
import Plans from './Plans';
import UserDrawer from '../../components/UserDrawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModalContext } from '../../contexts/ModalContext';
import { DashboardProvider } from '../../contexts/DashboardContext';

const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
  const { isModalOpen, openModal } = useContext(ModalContext);

  return (
    <>
    <DashboardProvider>
      {isModalOpen && <UserDrawer />}
      <Container>
        <Header>
          <Title>Olá, usuário</Title>
          <TouchableOpacity onPress={openModal}>
            <Icon name="user" size={33} color="#FFF" />
          </TouchableOpacity>
        </Header>
      </Container>
      <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch(route.name){
              case 'home':
                iconName = 'home';
                break;
              case 'transfer':
                iconName = 'repeat';
                break;
              case 'extract':
                iconName = 'file-text';
                break;
              case 'deposit':
                iconName = 'dollar-sign';
                break;
              case 'plans':
                iconName = 'book';
                break;
              default:
                iconName = 'alert-triangle'
                break;
            }

            return <Icon name={iconName} size={24} color="#FFF" />
          }
        })}
        sceneContainerStyle={{
          backgroundColor: '#8C52E5',
        }}
        tabBarOptions={{
          inactiveTintColor: '#FFF',
          activeTintColor: '#FFF',
          labelStyle:{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
          },
          iconStyle: {
            marginBottom: -20
          },
          style: {
            backgroundColor: '#68DE5A',
            borderTopWidth: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 100,
            paddingBottom: 20,
          }
        }}
      >
        <Tab.Screen name="home" component={Home} options={{tabBarLabel: 'Início'}} />
        <Tab.Screen name="transfer" component={Transfer} options={{tabBarLabel: 'Transferir'}} />
        <Tab.Screen name="extract" component={Extract} options={{tabBarLabel: 'Lançamentos'}} />
        <Tab.Screen name="deposit" component={Deposit} options={{tabBarLabel: 'Depositar'}} />
        <Tab.Screen name="plans" component={Plans} options={{tabBarLabel: 'Planos'}} />
      </Tab.Navigator>
    </NavigationContainer>
    </DashboardProvider>
    </>
  );
}

export default Dashboard;