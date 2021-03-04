import Api from '.'


export const getPlans = async (login: string) : Promise<IPlansData[]> => {
  const response = await Api.get(`lancamentos/planos-conta?login=${login}`)
  return response.data
}

export const loadData = async ({fim,
  inicio,
  login,}: IDashboardQueryData): Promise<IAccountData> => {
  const response  = await Api.get<IAccountData>('dashboard', {params: {
    fim,
    inicio,
    login,
  }},)
  return response.data
}