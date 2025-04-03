export type SignInBody = {
  username: string;
  password: string;
  password_confirmation: string;
  isAdmin: boolean;
};

export type LoginBody = {
  username: string;
  password: string;
};

export type Cookie = {
  Cookie: string;
};
