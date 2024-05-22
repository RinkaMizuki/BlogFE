import { CommentDetail, CommentType } from "../types";
import { UserDetail } from "../../types";
import { useNavigate } from "react-router-dom";
import MessageBox from "./MessageBox";
import { Dispatch, useEffect, useRef, useState } from "react";
import { post as postLikeComment } from "../../services/postService";

interface Props {
  comment: CommentType;
  isCommentChild?: boolean;
  userLogin: UserDetail | null;
  setIdCommentEditShow: (commentId: number) => void;
  idCommentEditShow: number;
  setToggleAddCommentId: Dispatch<React.SetStateAction<number>>;
  toggleAddCommentId: number;
}
let isLike = 0;
let isUnLike = 0;

const Comment = ({ comment, isCommentChild = false, userLogin, idCommentEditShow, setIdCommentEditShow, setToggleAddCommentId, toggleAddCommentId }: Props) => {

  const commentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(comment.is_liked || false);
  const [countLike, setCountLike] = useState<number>(comment.like);
  const handleAddComment = (commentId: number) => {
    if (!userLogin) {
      navigate('/login');
      return
    }
    setIdCommentEditShow(commentId)
  }
  const handleLikeComment = async () => {

    if (!userLogin) {
      navigate('/login');
      return
    }
    try {
      if (!isLike) {
        if (isLike != comment.id) {
          isLike = comment.id
          setIsLiked(true);
          setCountLike(preCount => ++preCount)
          const { comment: likeComment }: { comment: CommentDetail } = await postLikeComment(`/posts/${comment.id}/like`, {});
          setToggleAddCommentId(likeComment.id)
          isLike = 0
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleUnlikeComment = async (commentId: number) => {
    if (!userLogin) {
      navigate('/login');
      return
    }
    try {
      if (!isUnLike) {
        if (isUnLike != comment.id) {
          isUnLike = comment.id
          setIsLiked(false);
          setCountLike(preCount => --preCount)
          const { comment: likeComment }: { comment: CommentDetail } = await postLikeComment(`/posts/${commentId}/unlike`, {});
          setToggleAddCommentId(likeComment.like)
          isUnLike = 0
        }
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (commentRef.current) {
      if (toggleAddCommentId == comment.id) {
        commentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      }
    }
  }, [toggleAddCommentId]);

  return (
    <>
      <div className={`card-body ${isCommentChild ? "ml-10 pt-0" : ""}`} ref={commentRef}>
        <div className="d-flex flex-start align-items-center">
          <img className="rounded-circle shadow-1-strong me-3 object-cover"
            src={comment.user?.avatar} alt={comment.user?.url} width={`${!isCommentChild ? "60" : "50"}`}
            height={`${!isCommentChild ? "60" : "50"}`} />
          <div>
            <span className={`fw-bold text-primary mb-1 ${isCommentChild ? "text-sm" : ""}`}>{comment.user?.username}</span>
            <p className={`text-muted small mb-0  ${isCommentChild ? "text-xs" : ""}`}>
              {new Date(comment.created_at).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="mt-3 mb-4 pb-2">
          {(isCommentChild && comment?.user?.id !== comment.parentUser?.id) && <span className={`fw-bold text-primary mb-1 ${isCommentChild ? "text-sm" : ""}`}>{comment?.parentUser?.username}</span>}
          <span> {comment.comment_content}</span>
        </p>

        <div className="small d-flex justify-content-start">
          <div className="d-flex align-items-center me-3">
            {!userLogin ? <i className="far fa-thumbs-up me-2 cursor-pointer" onClick={handleLikeComment}></i> : isLiked ? <i className="fa-solid fa-thumbs-up me-2 text-[#257aff] cursor-pointer" onClick={() => handleUnlikeComment(comment.id)}></i> : <i className="far fa-thumbs-up me-2 cursor-pointer" onClick={handleLikeComment}></i>}
            <p className="mb-0 text-[#257aff]">{`(${countLike})`}</p>
          </div>
          <div className="d-flex align-items-center me-3" onClick={() => {
            handleAddComment(comment.id)
          }}>
            <i className="far fa-comment-dots me-2 cursor-pointer"></i>
            <p className="mb-0">Comment <span className="text-[#6941c6]">{comment?.parent_comment_id ? comment.comments.length > 0 ? `(${comment.comments.length})` : "" : `(${comment.repliesCount})`}</span></p>
          </div>
          <div className="d-flex align-items-center me-3">
            <i className="fas fa-share me-2 cursor-pointer"></i>
            <p className="mb-0">Share</p>
          </div>
        </div>
      </div>

      {comment.id === idCommentEditShow
        &&
        <MessageBox
          postId={comment.post_id}
          setIdCommentEditShow={setIdCommentEditShow}
          userLogin={userLogin}
          commentId={comment.id}
          userCurrComment={comment.user}
          setToggleAddCommentId={setToggleAddCommentId}
        />
      }

      {comment.comments?.length > 0 && comment.comments.map(commentChild => {
        return (
          <Comment
            idCommentEditShow={idCommentEditShow}
            setIdCommentEditShow={setIdCommentEditShow}
            userLogin={userLogin}
            key={commentChild.id}
            isCommentChild={true}
            comment={commentChild}
            setToggleAddCommentId={setToggleAddCommentId}
            toggleAddCommentId={toggleAddCommentId}
          />
        )
      })}
    </>
  )
};

export default Comment;
