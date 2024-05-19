import { Box } from "@mui/material";
import { Post as PostType } from "../../pages/types";
import Comment from "../Comment";
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import { get as getListComment } from "../../services/postService";
import { CommentType } from "../types";
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

interface ModifiedCommentType {
  parentComment: CommentType;
  childrenComments: CommentType[];
}

const Post = ({ data }: { data: PostType | null }) => {

  const userLogin = useAppSelector(state => state.auth.userInfo?.user) || null;
  const [idCommentEditShow, setIdCommentEditShow] = useState<number>(0);
  const [listComment, setListComment] = useState<ModifiedCommentType[]>([]);

  useEffect(() => {
    const fetchListComment = async () => {
      if (data) {
        try {
          const comments: CommentType[] = await getListComment(`/posts/${data?.id}/comments`);
          const modifiedComment = comments.reduce<ModifiedCommentType[]>((acc, currentComment, index, rootComments) => {
            if (currentComment.parent_comment === null) {
              const childs = rootComments.filter(comment => comment.parent_comment_id === currentComment.id);
              return [...acc, { parentComment: currentComment, childrenComments: childs }]
            }
            return acc;
          }, []);
          setListComment(modifiedComment);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchListComment();
  }, [data])

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
          {!userLogin && <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card mb-4 bg-white p-2 text-center flex justify-center items-center flex-row gap-2">
                <CommentIcon />
                <Link to="/login">Login to comment.</Link>
              </div>
            </div>
          </div>}
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              {listComment.length ? listComment?.map(comment => {
                return (
                  <div className="card mb-4" key={comment.parentComment.id}>
                    <Comment
                      comment={comment.parentComment}
                      userLogin={userLogin}
                      setIdCommentEditShow={setIdCommentEditShow} idCommentEditShow={idCommentEditShow}
                    />
                    {comment.childrenComments?.length > 0 && comment.childrenComments.map(commentChild => {
                      return (
                        <Comment
                          idCommentEditShow={idCommentEditShow}
                          setIdCommentEditShow={setIdCommentEditShow}
                          userLogin={userLogin}
                          key={commentChild.id}
                          isCommentChild={true}
                          comment={commentChild}
                        />
                      )
                    })}
                  </div>
                )
              }) : "Loading..."}
            </div>
          </div>
        </div>
      </section>
    </Box>
  )
};

export default Post;
