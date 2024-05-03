import { Button } from "@mui/material";
import svg from "../assets/images/404.svg";
import { useNavigate } from "react-router-dom";

const Notfound = () => {

  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <img src={svg} alt="svg" className="h-4/5 w-4/5" />
      <Button
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "#7F56D9",
          color: "#ffffff",
          ":hover": {
            backgroundColor: "#ACACAC"
          }
        }}
      >
        Back to Home
      </Button>
    </div>
  )
};

export default Notfound;
