import { Button } from "@mui/material";
import Input from '@mui/material/Input';
import { useContext } from "react";
import { ColorModeContext } from "../App";
import { Link } from "react-router-dom";
import AllPost from "../components/AllPost";
import { fakeData } from "./Home";

const Newsletter = () => {

  const { mode } = useContext(ColorModeContext);

  return (
    <div className="m-body">
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-[#7F56D9] font-semibold">Newsletters</p>
        <h1 className="text-[35px] font-semibold">Stories and interviews</h1>
        <p className="max-w-[600px] text-center leading-snug font-light text-gray-400">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
        <div className="flex items-center gap-1 w-full justify-center flex-col">
          <div className="flex items-center gap-3 w-full justify-center">
            <Input placeholder="Enter your email" disableUnderline sx={{
              maxWidth: "300px",
              width: "100%",
              borderRadius: "5px",
              paddingLeft: "10px",
              paddingY: "2px",
              paddingRight: "10px",
              backgroundColor: mode === 'light' ? "#090D1F" : "#ffffff",
              color: mode === 'light' ? "#ffffff" : "#090D1F"
            }} />
            <Button
              sx={{
                textTransform: "unset",
                color: "#ffffff",
                backgroundColor: "#7F56D9",
                ":hover": {
                  backgroundColor: "#ACACAC"
                }
              }}
            >
              Subscribe
            </Button>
          </div>
          <span className="ml-[-10%] font-light text-xs text-gray-400">We care about your data in our <Link to="/" className="underline">privacy policy</Link></span>
        </div>
        <AllPost fakeData={fakeData} paging={3} showBtn={true} />
      </div>
    </div>
  )
};

export default Newsletter;
