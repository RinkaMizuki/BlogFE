interface Error {
  statusCode: number;
  message: string;
}

interface UserDetail {
  id: number;
  username: string;
  email: string;
  email_verified_at: string;
  url: string;
  avatar: string;
  phone: string;
  create_at: string;
  updated_at: string;
  role_id: number;
  avatar_public_id?: string | null;
}

interface User {
  status: number;
  message: string;
  remember_token?: string;
  user: UserDetail
}

interface RegisterState {
  username: string;
  password: string;
  email: string;
}

interface LoginState {
  email: string;
  password: string;
  remember: boolean;
}

export { type Error, type User, type UserDetail, type RegisterState, type LoginState } 