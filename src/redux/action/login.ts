import Redux from 'redux'
import * as Api from '../../api/login'

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
      dispatch<AuthSuccess>({
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: response
      })
    } catch (error) {
      dispatch<AuthRejected>(rejected(error))
    }
  }
}