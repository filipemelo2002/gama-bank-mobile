import Redux from 'redux'
import * as Api from '../../api/dashboard'
export const TEMPLATE_NAME = "DASHBOARD"


export const pending = () => ({
  type: `${TEMPLATE_NAME}_PENDING`
})

export const rejected = (error: string) => ({
  type: `${TEMPLATE_NAME}_REJECTED`,
  payload: error
})


export const getPlans = (login: string) => {
  return async (dispatch: Redux.Dispatch) => {
    try {
      dispatch<IDashboardPending>(pending())
      const response = await Api.getPlans(login)
      dispatch<IDashboardPlansSuccess>({
        type: `${TEMPLATE_NAME}_PLANS_SUCCESS`,
        payload: response
      })
    } catch (err) {
      dispatch<IDashboardRejected>(rejected(err))
    }
  }
}