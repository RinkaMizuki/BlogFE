interface Error {
  statusCode: number;
  message: string;
}
interface User {

}

interface RegisterState {
  username: string;
  password: string;
  email: string;
}

export { type Error, type User, type RegisterState } 