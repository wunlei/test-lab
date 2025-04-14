export type GetUserResponse = {
  id: number;
  username: string;
  is_admin: boolean;
};

export type GetUserParams = {
  cookie: string;
};
