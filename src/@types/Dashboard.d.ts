interface IPlansData {
  id: number,
  descricao: string,
  login: string,
  tipoMovimento: 'R' | 'D',
}

interface IPlansContextData {
  plans: IPlansData[];
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

interface IDashboardState extends IAccountData, IPlansContextData {
  loading: boolean;
  error: boolean;
}


interface IDashboardPlansSuccess {
  type: string;
  payload: IPlansData[];
}

interface IDashboardPending {
  type: string;
  payload?: undefined | string;
}

type IDashboardRejected = IDashboardPending;