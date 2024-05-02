import { ReactNode } from "react";
import { Footer, Header } from "../components";

const DefaultLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="mb-12">
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default DefaultLayout;
