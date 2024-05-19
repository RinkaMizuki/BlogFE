import { Box } from "@mui/material";
import { Post as PostType } from "../../pages/types";
import Comment from "../Comment";
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { Dispatch, useState } from "react";
import MessageBox from "../Comment/MessageBox";
const options = {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric'
} as Intl.DateTimeFormatOptions;

export interface IdType {
  primaryId?: number;
  secondaryId?: number[];
}

interface Props {
  data: PostType | null;
  setToggleAddCommentId: Dispatch<React.SetStateAction<number>>;
  toggleAddCommentId: number;
}

const Post = ({ data, setToggleAddCommentId, toggleAddCommentId }: Props) => {

  const userLogin = useAppSelector(state => state.auth.userInfo?.user) || null;
  const [idCommentEditShow, setIdCommentEditShow] = useState<number>(0);

  if (!data) return "Loading..."
  return (
    <Box>
      <span>{new Intl.DateTimeFormat('en-GB', options).format(new Date(data.created_at))}</span>
      <h1>{data.post_title}</h1>
      <div>
        {data.post_content}
      </div>
      <section style={{
        backgroundColor: "#eee",
      }}>
        <div className="container my-5 py-5">
          {!userLogin ? <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card mb-4 bg-white p-2 text-center flex justify-center items-center flex-row gap-2">
                <CommentIcon />
                <Link to="/login">Login to comment.</Link>
              </div>
            </div>
          </div> :
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 col-lg-10 col-xl-8">
                <div className="card mb-4 bg-white p-2 text-center flex justify-center items-center flex-row gap-2">
                  <MessageBox
                    isReply={false}
                    postId={data.id}
                    setIdCommentEditShow={setIdCommentEditShow}
                    userLogin={userLogin}
                    userCurrComment={userLogin}
                    setToggleAddCommentId={setToggleAddCommentId}
                  />
                </div>
              </div>
            </div>
          }
          <div className="row d-flex justify-content-center">

            <div className="col-md-12 col-lg-10 col-xl-8">
              {data.comments.map(comment => {
                return (
                  <div className="card mb-4" key={comment.id}>
                    <Comment
                      comment={comment}
                      userLogin={userLogin}
                      setIdCommentEditShow={setIdCommentEditShow} idCommentEditShow={idCommentEditShow}
                      setToggleAddCommentId={setToggleAddCommentId}
                      toggleAddCommentId={toggleAddCommentId}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </Box>
  )
};

export default Post;
