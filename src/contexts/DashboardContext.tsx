import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { createContext, ReactNode, useContext, useState } from 'react'
import api from '../services/api';
import { LoginContext } from './LoginContext';


export const DashboardContext = createContext({});
export const PlansContext = createContext({} as IPlansContextData);

export function DashboardProvider({children, ...rest}: IDashboardProviderProps) {
  const { user } = useContext(LoginContext);
  const navigator = useNavigation();
  const [plans, setPlans] = useState<IPlansData[]>([]);
  const [plansCount, setPlansCount] = useState(0);

  async function getPlans() {
    const token = await AsyncStorage.getItem('@Gamabank:Token');

    if(!token) {
      navigator.navigate('sign');
      return;
    }

    const response = await api.get(`lancamentos/planos-conta?login=${user.usuario.login}`, 
      {
        headers: {
          authorization: token
        }
      }
    );

    setPlans(response.data);
    setPlansCount(plans.length);
  }


  return (
    <DashboardContext.Provider value={{}}>
      <PlansContext.Provider value={{
        getPlans,
        plans,
        plansCount,
      }}>
        {children}
      </PlansContext.Provider>
    </DashboardContext.Provider>
  );
}