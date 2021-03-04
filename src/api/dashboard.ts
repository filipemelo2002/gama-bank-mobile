import Api from '.'


export const getPlans = async (login: string) : Promise<IPlansData[]> => {
  const response = await Api.get(`lancamentos/planos-conta?login=${login}`)
  return response.data
}