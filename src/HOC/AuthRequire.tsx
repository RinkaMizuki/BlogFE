import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const AuthRequire = (OriginComponent: () => JSX.Element) => {
  return function ExtendComponent() {
    const userLogin = useAppSelector(state => state.auth?.userInfo);

    return !userLogin ? <Navigate to="/" /> : <OriginComponent />
  }
};

export default AuthRequire;
