import { useContext } from "react";
import { ColorModeContext } from "../App";
import AllPost from "../components/AllPost";
import { fakeData } from "./Home";
import Subscribe from "../components/Subscribe";

const Newsletter = () => {

  const { mode } = useContext(ColorModeContext);

  return (
    <div className="m-body">
      <div className="flex flex-col justify-center items-center gap-6">
        <Subscribe mode={mode} />
        <AllPost fakeData={fakeData} paging={3} showBtn={true} />
      </div>
    </div>
  )
};

export default Newsletter;
