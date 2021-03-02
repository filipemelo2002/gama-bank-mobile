import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './Home';
import Extract from './Extract';

const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
  return (
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
        <Tab.Screen name="transfer" component={Home} options={{tabBarLabel: 'Transferir'}} />
        <Tab.Screen name="extract" component={Extract} options={{tabBarLabel: 'Lançamentos'}} />
        <Tab.Screen name="deposit" component={Home} options={{tabBarLabel: 'Depositar'}} />
        <Tab.Screen name="plans" component={Home} options={{tabBarLabel: 'Planos'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Dashboard;