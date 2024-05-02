import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../App";
import CartPost from "../components/CartPost";
import image1 from "../assets/images/Image1.png";
import image2 from "../assets/images/Image2.png";
import image3 from "../assets/images/Image3.png";
import image4 from "../assets/images/Image4.png";
import image5 from "../assets/images/Image5.png";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const fakeData = [
  {
    image: image1,
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    line: 0,
  },
  {
    image: image2,
    desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get.",
    line: 3,
  },
  {
    image: image3,
    desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag.",
    line: 3,
  },
  {
    image: image4,
    desc: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    line: 5,
  },
  {
    image: image5,
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    line: 2,
  },
]

const Home = () => {

  const { mode } = useContext(ColorModeContext)

  return (
    <div className="flex justify-center items-center flex-col m-body">
      <Box className="flex flex-col justify-center items-center gap-12 w-full" sx={{
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderStyle: "solid",
        borderColor: mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#ffffff",
      }}>
        <h1 className="text-title font-semibold letter-spacing leading-none cursor-default select-none">THE BLOG</h1>
      </Box>
      <section className="flex flex-col items-center gap-12 self-stretch mt-8">
        <h1 className="text-2xl font-medium self-start">Recent blog posts</h1>
        <Grid container direction="column" rowSpacing={{ xs: 3, sm: 3, md: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container direction="row">
            <Grid lg={6} md={12}>
              <CartPost image={fakeData[0].image} desc={fakeData[0].desc} line={fakeData[0].line} />
            </Grid>
            <Grid lg={6} direction="column" md={12}>
              <Grid lg={6} md={12} marginBottom={1}>
                <CartPost wrap="wrap" image={fakeData[1].image} desc={fakeData[1].desc} line={fakeData[1].line} isRow={true} />
              </Grid>
              <Grid lg={6} md={12}>
                <CartPost wrap="wrap" image={fakeData[2].image} desc={fakeData[2].desc} line={fakeData[2].line} isRow={true} />
              </Grid>
            </Grid>
          </Grid>
          <Grid md={12}>
            <CartPost wrap="wrap" image={fakeData[3].image} desc={fakeData[3].desc} line={fakeData[3].line} isRow={true} isLg={true} />
          </Grid>
        </Grid>
      </section>
      <section className="flex flex-col items-center gap-16 self-stretch">
        <div className="flex w-full py-[32px] flex-col items-start gap-8 border-b border-solid border-[#eaecf05c]">
          <h1 className="text-2xl font-medium">All blog posts</h1>
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={{ xs: 3, sm: 3, md: 3 }} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
              <Grid xs={12} md={6} lg={4}>
                <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
              </Grid>
            </Grid>
          </Box>
          {/* <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid2 xs={2} sm={4} md={4}>
              <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
            </Grid2>
            <Grid2 xs={2} sm={4} md={4}>
              <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
            </Grid2>
            <Grid2 xs={2} sm={4} md={4}>
              <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
            </Grid2>
            <Grid2 xs={2} sm={4} md={4}>
              <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
            </Grid2>
            <Grid2 xs={2} sm={4} md={4}>
              <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
            </Grid2>
            <Grid2 xs={2} sm={4} md={4}>
              <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
            </Grid2>
          </Grid2> */}
        </div>
      </section>
      <Box className="flex justify-between w-full mt-6 max-md:flex-col max-md:justify-center max-md:items-center">
        <Button sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "0"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M15.8334 10.4998H4.16669M4.16669 10.4998L10 16.3332M4.16669 10.4998L10 4.6665" stroke="#b0b0b0" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#b0b0b0]">Previous</span>
        </Button>
        <div className="flex">
          <Button className="flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px] bg-[#F9F5FF]">
            <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">1</span>
          </Button>
          <Button className="flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px]">
            <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">2</span>
          </Button>
          <Button className="flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px]">
            <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">3</span>
          </Button>
          <Button className="flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px]">
            <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">...</span>
          </Button>
          <Button className="flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px]">
            <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">8</span>
          </Button>
          <Button className="flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px]">
            <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">9</span>
          </Button>
          <Button className="flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px]">
            <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">10</span>
          </Button>
        </div>
        <Button sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "0"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M4.16666 10.4998H15.8333M15.8333 10.4998L9.99999 4.6665M15.8333 10.4998L9.99999 16.3332" stroke="#b0b0b0" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#b0b0b0]">Next</span>
        </Button>
      </Box>
    </div>
  )
};

export default Home;
