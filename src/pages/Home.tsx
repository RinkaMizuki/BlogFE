import { Box } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../App";
import CartPost from "../components/CartPost";
import image1 from "../assets/images/Image1.png";
import image2 from "../assets/images/Image2.png";
import image3 from "../assets/images/Image3.png";

const Home = () => {

  const { mode } = useContext(ColorModeContext)

  return (
    <Box className="flex ml-[115px] mr-[115px] flex-col justify-center items-center gap-12" sx={{
      borderTopWidth: "1px",
      borderBottomWidth: "1px",
      borderStyle: "solid",
      borderColor: mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#ffffff",
    }}>
      <h1 className="text-[245px] font-semibold  tracking-[8px] leading-none cursor-default select-none">THE BLOG</h1>
      <section className="flex flex-col items-center gap-16 self-stretch">
        <div className="flex w-full py-[32px] flex-col items-start gap-8">
          <h1 className="text-2xl font-medium">Recent blog posts</h1>
          <div className="flex items-start gap-8 self-stretch ">
            <CartPost image={image1} />
            <div className="flex flex-col self-stretch gap-8 flex-1 h-full">
              <CartPost wrap="wrap" image={image2} />
              <CartPost wrap="wrap" image={image3} />
            </div>
          </div>
        </div>
      </section>
    </Box>
  )
};

export default Home;
