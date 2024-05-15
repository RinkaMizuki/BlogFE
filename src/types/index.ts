interface Error {
  statusCode: number;
  message: string;
}
interface User {
  status: number;
  message: string;
  remember_token?: string;
  user: {
    id: number;
    username: string;
    email: string;
    email_verified_at: Date | null;
    url: string;
    avatar: string;
    phone: string;
    create_at: Date | null;
    updated_at: Date | null;
    role_id: number;
    avatar_public_id?: string | null;
  }
}

interface RegisterState {
  username: string;
  password: string;
  email: string;
}

interface LoginState {
  email: string;
  password: string;
}

export { type Error, type User, type RegisterState, type LoginState } 