import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CartPost from "../components/CartPost";
import Post from "../components/Post";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Subscribe from "../components/Subscribe";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../App";
import { useParams } from 'react-router';
import { useAppSelector } from "../hooks";
import { get as getPostByTitle } from "../services/postService";
import { Post as PostType } from "./types";

const Detail = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const { mode } = useContext(ColorModeContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const params = useParams();
  const listRecentPost = useAppSelector(state => state.blog.post);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
    const fetchPostByTitle = async () => {
      const res = await getPostByTitle(`/posts/${params.title}`);
      setPost(res.post);
    }
    fetchPostByTitle();
  }, [params.title])

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
          {listRecentPost?.map((post) => (
            <Grid key={post.id}>
              <CartPost image={post.post_thumbnail} desc={post.post_content} line={3} url={post.url} title={post.post_title} cate={post.cat_title} date={post.created_at} />
            </Grid>
          ))}
        </Grid>
        <Grid md={8} sm={12}>
          <Post data={post} />
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
