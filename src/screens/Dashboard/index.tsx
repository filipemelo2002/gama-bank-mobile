import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './Home';

const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch(route.name){
              case 'Home':
                iconName = 'home';
                break;
              case 'transactions':
                iconName = 'repeat';
                break;
              case 'extract':
                iconName = 'file-text';
                break;
              case 'save':
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
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
            marginTop: -19,
            height: 100,
            paddingBottom: 20,
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Início'}} />
        <Tab.Screen name="transactions" component={Home} options={{tabBarLabel: 'Transações'}} />
        <Tab.Screen name="extract" component={Home} options={{tabBarLabel: 'Lançamentos'}} />
        <Tab.Screen name="save" component={Home} options={{tabBarLabel: 'Depositar'}} />
        <Tab.Screen name="plans" component={Home} options={{tabBarLabel: 'Planos'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Dashboard;