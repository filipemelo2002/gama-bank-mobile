interface AuthInitialState extends IUserData {
  error: boolean;
  loading: boolean;
}

interface AuthSuccess {
  type: string;
  payload: IUserData;
}

interface AuthPending {
  type: string;
  payload?: string | undefined;
}
interface AuthChangePassword {
  type: string;
  payload: string;
}

type AuthRejected = AuthPending;
