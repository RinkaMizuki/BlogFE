import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../App";
import AllPost from "../components/AllPost";
import RecentPost from "../components/RecentPost";
import Pagination from "../components/Pagination/Pagination";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { get as getHomePosts } from "../services/postService";
import { AllPostResponse, Category, Post } from "./types";
import { UserDetail } from "../types";
import { useAppDispatch } from "../hooks";
import { setListRecentPost } from "../redux/post/postSlice";

interface HomePostsType {
  ALL_BLOG_POSTS: AllPostResponse;
  ALL_CATEGORIES: Category[];
  DATA_SEARCH: {
    categorie: Category[] | [];
    posts: Post[] | []
  }
  RECENT_BLOG_POSTS: Post[] | undefined;
  USER: UserDetail;
}

const Home = () => {

  const { mode } = useContext(ColorModeContext)
  const [currentPage, setCurrentPage] = useState<number>(() => {
    return +JSON.parse(localStorage.getItem('currPage') || "1")
  });
  const [homePosts, setHomePosts] = useState<HomePostsType | null>(null);
  const dispatch = useAppDispatch();

  const handlePageChange = (pageNumber: number) => {
    localStorage.setItem('currPage', JSON.stringify(pageNumber));
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchPostData = async () => {
      const postData: HomePostsType = await getHomePosts("/home", {
        params: {
          keyword: "ad",
          page: currentPage
        }
      })
      dispatch(setListRecentPost(postData.RECENT_BLOG_POSTS))
      setHomePosts(postData);
    }
    fetchPostData();
  }, [currentPage])

  return (
    <div className="flex justify-center items-center flex-col m-body">
      <ToastContainer></ToastContainer>
      <Box className="flex flex-col justify-center items-center gap-12 w-full" sx={{
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderStyle: "solid",
        borderColor: mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#ffffff",
      }}>
        <h1 className="text-title font-semibold letter-spacing leading-none cursor-default select-none">THE BLOG</h1>
      </Box>
      <RecentPost data={homePosts?.RECENT_BLOG_POSTS} />
      <AllPost data={homePosts?.ALL_BLOG_POSTS.data} />
      <Box className="flex justify-between w-full mt-6 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-3">
        <Pagination currentPage={currentPage} totalPages={homePosts?.ALL_BLOG_POSTS?.last_page} onPageChange={handlePageChange} />
      </Box>
    </div >
  )
};

export default Home;
