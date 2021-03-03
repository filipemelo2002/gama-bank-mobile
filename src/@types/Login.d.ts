
interface ILoginContextData {
  user: IUserData;
  loginUser: ({}:IPostData) => Promise<boolean>;
}
interface SignUpData {
  cpf: string;
  login: string;
  nome: string;
  senha: string;
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

interface ForgotPasswordData {
  userName: string;
  password: string;
}

interface IPostData {
  senha: string;
  usuario: string;
}
