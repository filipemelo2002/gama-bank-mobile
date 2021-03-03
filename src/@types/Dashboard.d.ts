interface IPlansData {
  id: number,
  descricao: string,
  login: string,
  tipoMovimento: 'R' | 'D',
}

interface IPlansContextData {
  plans: IPlansData[];
  plansCount: number;
  getPlans: () => Promise<void>,
}

interface IDashboardProviderProps{
  children: ReactNode;
}

interface ILancamentosData {
  id: number;
  conta: number;
  data: string;
  descricao: string;
  planoConta: {
    id: number;
    descricao: string;
  };
  tipo: 'R' | 'D';
  valor: string;
}

interface IAccountData {
  contaBanco: {
    id: number | undefined;
    lancamentos: ILancamentosData[];
    saldo: string;
  };
  contaCredito: {
    id: number | undefined;
    lancamentos: ILancamentosData[];
    saldo: string;
  };
}

interface IDashboardState extends IAccountData {
  loading: boolean;
  error: boolean;
}