import Toast from 'react-native-toast-message';

export const showError = (message: string) => {
  Toast.show({
    type: 'error',
    text1: '',
    text2: message,
    topOffset: 60,
  });
}