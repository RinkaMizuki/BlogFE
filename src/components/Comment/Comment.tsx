import { CommentType } from "../types";
import { UserDetail } from "../../types";
import { useNavigate } from "react-router-dom";
import MessageBox from "./MessageBox";

interface Props {
  comment: CommentType;
  isCommentChild?: boolean;
  userLogin: UserDetail | null;
  setIdCommentEditShow: (commentId: number) => void;
  idCommentEditShow: number;
}

const Comment = ({ comment, isCommentChild = false, userLogin, idCommentEditShow, setIdCommentEditShow }: Props) => {

  const navigate = useNavigate();
  const handleAddComment = (commentId: number) => {
    if (!userLogin) {
      navigate('/login');
      return
    }
    setIdCommentEditShow(commentId)
  }
  const handleLikeComment = () => {
    if (!userLogin) {
      navigate('/login');
      return
    }
  }

  return (
    <>
      <div className={`card-body ${isCommentChild ? "ml-10 pt-0" : ""}`}>
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
          <div className="d-flex align-items-center me-3 cursor-pointer" onClick={handleLikeComment}>
            <i className="far fa-thumbs-up me-2"></i>
            <p className="mb-0">Like</p>
          </div>
          <div className="d-flex align-items-center me-3 cursor-pointer" onClick={() => { handleAddComment(comment.id) }}>
            <i className="far fa-comment-dots me-2"></i>
            <p className="mb-0">Comment</p>
          </div>
          <div className="d-flex align-items-center me-3 cursor-pointer">
            <i className="fas fa-share me-2"></i>
            <p className="mb-0">Share</p>
          </div>
        </div>
      </div>

      {comment.id === idCommentEditShow
        && <MessageBox
          postId={comment.post_id}
          setIdCommentEditShow={setIdCommentEditShow}
          userLogin={userLogin}
          commentId={comment.id}
          userCurrComment={comment.user}
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
          />
        )
      })}
    </>
  )
};

export default Comment;
