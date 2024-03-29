import { Chip } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../App";

const CartPost = ({ wrap = "nowrap", image }: { wrap?: string, image: string }) => {

  const { mode } = useContext(ColorModeContext);

  return (
    <div className={`flex ${wrap === "nowrap" ? "flex-col gap-8" : "gap-5"} items-start self-stretch ${wrap === "nowrap" ? "max-w-[590px]" : ""} `}>
      <div className={`h-full ${wrap === "wrap" ? "basis-[60%] min-h-[200px]" : ""}`}>
        <img src={image} alt="cart 1" className="w-full h-full object-cover" />
      </div>
      <div className={`flex flex-col items-start gap-6 ${wrap === "wrap" && "basis-[40%]"}`}>
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="self-stretch text-[#6941C6] text-sm font-medium">Sunday , 1 Jan 2023</p>
          <div className="flex items-center justify-between gap-4 self-stretch">
            <h1 className={`${wrap === "nowrap" ? "text-2xl" : "text-xl"} font-semibold`}>UX review presentations</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <p className={`text-[${mode === 'light' ? "#667085" : "#C0C5D0"}] text-base font-normal ${wrap === "wrap" && "max-h-[245px] line-clamp-3"}`}>
            How do you create compelling presentations that wow your colleagues and impress your managers?
          </p>
        </div>
        <div className="flex items-center gap-2 text-base">
          <Chip label="Design" sx={{
            backgroundColor: "#F9F5FF",
            color: "#6941C6",
            fontWeight: "600",
            fontFamily: "Inter",
            fontSize: "16px"
          }}></Chip>
          <Chip label="Research" sx={{
            backgroundColor: "#F9F5FF",
            color: "#3538CD",
            fontWeight: "600",
            fontFamily: "Inter",
            fontSize: "16px"
          }}></Chip>
          <Chip label="Presentation" sx={{
            backgroundColor: "#F9F5FF",
            color: "#C11574",
            fontWeight: "600",
            fontFamily: "Inter",
            fontSize: "16px"
          }}></Chip>
        </div>
      </div>
    </div>
  )
};

export default CartPost;
