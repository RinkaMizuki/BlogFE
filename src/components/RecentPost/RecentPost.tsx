import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CartPost from "../CartPost";
import { FakeDataItem } from "../Type";

interface Props {
  fakeData: FakeDataItem[];
}

const RecentPost = ({ fakeData }: Props) => {
  return (
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
  )
};

export default RecentPost;
