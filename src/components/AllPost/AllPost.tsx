import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CartPost from "../CartPost";
import { FakeDataItem } from "../Type";

interface Props {
  fakeData: FakeDataItem[];
  paging?: number | null;
  showBtn?: boolean
}
const AllPost = ({ fakeData, paging, showBtn = false }: Props) => {
  return (
    <section className="flex flex-col items-center gap-16 self-stretch">
      <div className="flex w-full py-[32px] flex-col items-start gap-8 border-b border-solid border-[#eaecf05c]">
        <h1 className="text-2xl font-medium">All blog posts</h1>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={{ xs: 3, sm: 3, md: 3 }} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
            {Array.from({ length: paging || fakeData.length + 1 }).map((_, index) => (
              <Grid xs={12} md={6} lg={4} key={index}>
                <CartPost image={fakeData[4].image} desc={fakeData[4].desc} line={fakeData[4].line} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {showBtn && <Button
          sx={{
            textTransform: "unset",
            alignSelf: "center",
            color: "#ffffff",
            backgroundColor: "#7F56D9",
            ":hover": {
              backgroundColor: "#ACACAC"
            }
          }}
        >
          Show All Post
        </Button>}
      </div>
    </section>
  )
};

export default AllPost;
