import { Chip, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../App";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

interface CartProps {
  wrap?: string;
  image: string;
  desc?: string;
  title: string;
  line: number;
  isRow?: boolean;
  isLg?: boolean;
  className?: string;
  cate: string;
  url: string;
  date: string;
}

const CartPost = ({ wrap = "nowrap", image, desc, line, isRow = false, isLg = false, className, cate, title, url, date }: CartProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const { mode } = useContext(ColorModeContext);

  return (
    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isRow ? "row" : "column"}>
      <Grid sx={{
        overflow: "hidden",
        maxWidth: "100%",
      }}
        md={isRow ? (matches && isLg ? 12 : 6) : false}
        xs={isRow ? 12 : "auto"}
      >
        <img src={image} alt="cart 1" className={`object-cover ${className || ""}`} style={{
          width: "100%",
          height: "100%"
        }} />
      </Grid>
      <Grid
        md={isRow ? (matches && isLg ? 12 : 6) : false}
        xs={isRow ? 12 : "auto"}
        sx={{
          maxWidth: "100%",
        }}
      >
        <Link className="flex flex-col items-start gap-3 max-w-full text-ellipsis line-clamp-5" to={`/blog/${url}`}>
          <p className="self-stretch text-[#6941C6] text-sm font-medium">{date}</p>
          <div className="flex items-center justify-between gap-4 self-stretch">
            <h1 className={`${wrap === "nowrap" ? "text-2xl" : "text-xl"} font-semibold overflow-hidden text-ellipsis whitespace-nowrap`}>{title}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className={`text-[${mode === 'light' ? "#667085" : "#C0C5D0"}] text-base overflow-hidden text-ellipsis line-clamp-5 font-normal ${wrap === "wrap" && `max-h-[245px] line-clamp-${line}`}`} dangerouslySetInnerHTML={{
            __html: desc ? desc : ""
          }}>

          </p>
        </Link>
        <div className="flex items-center gap-2 text-base mt-4">
          <Chip label={cate} sx={{
            backgroundColor: "#F9F5FF",
            color: "#6941C6",
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
