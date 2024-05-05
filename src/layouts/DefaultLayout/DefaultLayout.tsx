import { ReactNode } from "react";
import { Footer, Header } from "../components";

const DefaultLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="h-full">
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default DefaultLayout;
