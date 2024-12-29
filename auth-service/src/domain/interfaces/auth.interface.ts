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
