import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

import Routes from './src/Routes';
import { ModalProvider } from './src/contexts/ModalContext';

export default function App() {
  const [loaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#8C52E5' }}>
        <ModalProvider>
          <Routes />
          <StatusBar style="auto" />
        </ModalProvider>
    </View>
  );
}