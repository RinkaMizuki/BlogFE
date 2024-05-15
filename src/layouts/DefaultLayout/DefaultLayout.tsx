import { ReactNode } from "react";
import { Footer, Header } from "../components";

const DefaultLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="h-full">
      <Header />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  )
};

export default DefaultLayout;
