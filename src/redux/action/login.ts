import Redux from 'redux'
import * as Api from '../../api/login'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const TEMPLATE_NAME = "LOGIN"

export const pending = () => ({
  type: `${TEMPLATE_NAME}_PENDING`
})

export const rejected = (error: string) => ({
  type: `${TEMPLATE_NAME}_REJECTED`,
  payload: error
})

export const signIn = (data: IPostData) => {
  return async (dispatch: Redux.Dispatch) => {
    try {
      dispatch<AuthPending>(pending())
      const response = await Api.signIn(data)
      await AsyncStorage.setItem('@Gamabank:Token', response.token)
      dispatch<AuthSuccess>({
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: response
      })
    } catch (error) {
      dispatch<AuthRejected>(rejected(error))
    }
  }
}

export const forgotPassword = ({ userName, password }: ForgotPasswordData) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch<AuthPending>({ type: `${TEMPLATE_NAME}_PENDING` });
      await Api.forgotPassword({ userName, password });
      dispatch<AuthChangePassword>({
        type: `${TEMPLATE_NAME}_CHANGE_PASSWORD`,
        payload: password,
      });
    } catch (error) {
      dispatch<AuthRejected>({
        type: `${TEMPLATE_NAME}_REJECTED`,
        payload: error,
      });
    }
  };
};
