import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CartPost from "../CartPost";
import { Post } from "../../pages/types";

interface Props {
  data: Post[] | undefined;
  showBtn?: boolean
}
const AllPost = ({ data, showBtn = false }: Props) => {

  return (
    data?.length ? <section className="flex flex-col items-center gap-16 self-stretch">
      <div className="flex w-full py-[32px] flex-col items-start gap-10 border-b border-solid border-[#eaecf05c]">
        <h1 className="text-2xl font-medium">All blog posts</h1>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={{ xs: 3, sm: 3, md: 3 }}
            columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          >
            {data.map(post => (
              <Grid xs={12} md={6} lg={4} key={post.id}>
                <CartPost image={post.post_thumbnail} desc={post.post_content} line={3} cate={post.cat_title} title={post.post_title} url={post.url} date={post.created_at} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {showBtn && <Button
          sx={{
            paddingX: '20px',
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
    </section> : "Loading..."
  )
};

export default AllPost;
