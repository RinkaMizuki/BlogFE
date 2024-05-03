import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CartPost from "../components/CartPost";
import { fakeData } from "./Home";
import Post from "../components/Post";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Subscribe from "../components/Subscribe";
import { useContext } from "react";
import { ColorModeContext } from "../App";

const Detail = () => {

  const { mode } = useContext(ColorModeContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="mt-10">
      <Grid
        marginX="5vw"
        container
        direction={`${!matches ? "row" : "column-reverse"}`}
        columnSpacing={{ lg: 8, md: 16 }}
      >
        <Grid
          md={4}
          sm={12}
          container
          spacing={4}
          sx={{
            paddingX: "0"
          }}
        >
          <Grid md={12}>
            <h1 className="text-2xl font-medium self-start">Recent blog posts</h1>
          </Grid>
          {Array.from({ length: 5 }).map((elm, index) => (
            <Grid>
              <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
            </Grid>
          ))}
        </Grid>
        <Grid md={8} sm={12}>
          <Post />
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px"
          }}>
            <Subscribe mode={mode} />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
};

export default Detail;
