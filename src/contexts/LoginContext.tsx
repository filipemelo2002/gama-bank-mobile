import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useState } from 'react';
import Toast from 'react-native-toast-message';
import api from '../services/api';

interface ILoginContextData {
  user: IUserData;
  loginUser: ({}:IPostData) => Promise<boolean>;
}

interface IUserData {
  usuario: {
    id: number | undefined;
    cpf: string;
    nome: string;
    login: string;
  };
  conta: {
    id: number | undefined;
    numero: string;
    saldo: number | undefined;
    tipo: string;
    descricao: string;
  };
  contaCredito: {
    id: number | undefined;
    numero: string;
    saldo: number | undefined;
    tipo: string;
    descricao: string;
  };
  token: string;
}

interface ILoginProviderProps {
  children: ReactNode;
}

interface IPostData {
  senha: string;
  usuario: string;
}

export const LoginContext = createContext({} as ILoginContextData);

export function LoginProvider({children, ...rest}: ILoginProviderProps){
  const [user, setUser] = useState({} as IUserData);

  async function loginUser(postData: IPostData) {
    try {
      const response = await api.post('login', postData);
      await AsyncStorage.setItem('@Gamabank:Token', response.data.token);
      setUser(response.data);
      return true;
    }catch(err) {
      return false;
    }
  }

  return (
    <LoginContext.Provider value={{
      user,
      loginUser,
    }}>
      {children}
    </LoginContext.Provider>
  );
}