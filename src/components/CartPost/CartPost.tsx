import { Chip, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../App";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface CartProps {
  wrap?: string,
  image: string,
  desc?: string,
  line: number,
  isRow?: boolean,
  isLg?: boolean,
}

const CartPost = ({ wrap = "nowrap", image, desc, line, isRow = false, isLg = false }: CartProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const { mode } = useContext(ColorModeContext);

  return (
    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isRow ? "row" : "column"}>
      <Grid sx={{
        overflow: "hidden"
      }}
        md={isRow ? (matches && isLg ? 12 : 6) : "auto"}
        xs={isRow ? 12 : "auto"}
      >
        <img src={image} alt="cart 1" className="object-cover" style={{
          width: "100%",
          height: "100%"
        }} />
      </Grid>
      <Grid
        md={isRow ? (matches && isLg ? 12 : 6) : "auto"}
        xs={isRow ? 12 : "auto"}
      >
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="self-stretch text-[#6941C6] text-sm font-medium">Sunday , 1 Jan 2023</p>
          <div className="flex items-center justify-between gap-4 self-stretch">
            <h1 className={`${wrap === "nowrap" ? "text-2xl" : "text-xl"} font-semibold`}>UX review presentations</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className={`text-[${mode === 'light' ? "#667085" : "#C0C5D0"}] text-base font-normal ${wrap === "wrap" && `max-h-[245px] line-clamp-${line}`}`}>
            {desc}
          </p>
        </div>
        <div className="flex items-center gap-2 text-base mt-4">
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
      </Grid>
    </Grid >
  )
};

export default CartPost;
