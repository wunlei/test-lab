export type SignUpBody = {
  username: string;
  password: string;
  password_confirmation: string;
  is_admin: boolean;
};

type SignUpSuccessResponse = {
  id: number;
  username: string;
  is_admin: boolean;
};

type SignUpErrorResponse = {
  username?: string[];
  password?: string[];
  password_confirmation?: string[];
  is_admin?: boolean[];
};

export type SignUpResponse = SignUpErrorResponse | SignUpSuccessResponse;

export type LoginBody = {
  username: string;
  password: string;
};

type LoginSuccessResponse = SignUpSuccessResponse;

type LoginErrorResponse = {
  error: string;
};

export type LoginResponse = LoginErrorResponse | LoginSuccessResponse;

export type Cookie = {
  Cookie: string;
};
