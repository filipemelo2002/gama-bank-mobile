import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import RecoveryPassword from '../screens/RecoveryPassword';
import Dashboard from '../screens/Dashboard';

const { Navigator, Screen } = createStackNavigator(); 

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#8C52E5'
          }
        }}
      >
        <Screen 
          name="signin"
          component={SignIn}
        />
        <Screen 
          name="signup"
          component={SignUp}
        />
        <Screen 
          name="recoverypassword"
          component={RecoveryPassword}
        />
        <Screen 
          name="dashboard"
          component={Dashboard}
        />
      </Navigator>
    </NavigationContainer>
  );
}