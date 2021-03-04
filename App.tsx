import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import Toast from 'react-native-toast-message'
import Routes from './src/Routes';
import { ModalProvider } from './src/contexts/ModalContext';
import {Provider} from 'react-redux'
import store from './src/redux/'
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
      <Provider store={store}>
        <ModalProvider>
          <Routes />
          <StatusBar style="auto" />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </ModalProvider>
        </Provider>
    </View>
  );
}