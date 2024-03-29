import { ReactNode } from "react";
import Header from "../components/Header";

const DefaultLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div>
      <Header />
      {children}
    </div>
  )
};

export default DefaultLayout;
