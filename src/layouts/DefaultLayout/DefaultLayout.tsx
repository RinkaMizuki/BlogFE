import { ReactNode } from "react";
import { Footer, Header } from "../components";

const DefaultLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="mb-8">
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default DefaultLayout;
