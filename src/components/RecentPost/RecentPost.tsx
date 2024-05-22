import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CartPost from "../CartPost";
import { Post } from "../../pages/types";

interface Props {
  data: Post[] | undefined;
}

const RecentPost = ({ data }: Props) => {

  return (
    data?.length ? <section className="flex flex-col items-center gap-12 self-stretch mt-8">
      <h1 className="text-2xl font-medium self-start">Recent blog posts</h1>
      <Grid container direction="column" rowSpacing={{ xs: 3, sm: 3, md: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
        maxWidth: "100%"
      }}>
        <Grid container direction="row" sx={{
          maxWidth: "100%"
        }}>
          <Grid lg={6} md={12}>
            <CartPost image={data[0].post_thumbnail} desc={data[0].post_content} line={3} cate={data[0].cat_title} title={data[0].post_title} url={data[0].url} date={data[0].created_at} />
          </Grid>
          <Grid lg={6} direction="column" md={12}>
            <Grid lg={6} md={12} marginBottom={1}>
              <CartPost wrap="wrap" image={data[1].post_thumbnail} desc={data[1].post_content} line={3} isRow={true} cate={data[1].cat_title} title={data[1].post_title} url={data[1].url} date={data[1].created_at} />
            </Grid>
            <Grid lg={6} md={12}>
              <CartPost wrap="wrap" image={data[2].post_thumbnail} desc={data[2].post_content} line={3} isRow={true} cate={data[2].cat_title} title={data[2].post_title} url={data[2].url} date={data[2].created_at} />
            </Grid>
          </Grid>
        </Grid>
        <Grid md={12}>
          <CartPost wrap="wrap" image={data[3].post_thumbnail} desc={data[3].post_content} line={3} isRow={true} isLg={true} className="max-h-[250px]" cate={data[3].cat_title} title={data[3].post_title} url={data[3].url} date={data[3].created_at} />
        </Grid>
      </Grid>
    </section> : "Loading..."
  )
};

export default RecentPost;
