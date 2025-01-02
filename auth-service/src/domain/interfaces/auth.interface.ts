export interface IRegisterParams {
  email: string;
  password: string;
  name: string;
  lastname: string;
}

export interface ILoginParams {
  email: string;
  password: string;
  rememberme: boolean;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  deleted?: boolean;
}
