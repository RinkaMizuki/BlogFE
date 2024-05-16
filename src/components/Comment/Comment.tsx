import { useState } from "react";
import { CommentType } from "../types";

interface Props {
  comment: CommentType;
  isCommentChild?: boolean;
}

const Comment = ({ comment, isCommentChild = false }: Props) => {

  const [idCommentEditShow, setIdCommentEditShow] = useState<number>(0);

  return (
    <>
      <div className={`card-body ${isCommentChild ? "ml-10 pt-0" : ""}`}>
        <div className="d-flex flex-start align-items-center">
          <img className="rounded-circle shadow-1-strong me-3"
            src={comment.user.avatar} alt={comment.user.url} width={`${!isCommentChild ? "60" : "50"}`}
            height={`${!isCommentChild ? "60" : "50"}`} />
          <div>
            <span className={`fw-bold text-primary mb-1 ${isCommentChild ? "text-sm" : ""}`}>{comment.user.username}</span>
            <p className={`text-muted small mb-0  ${isCommentChild ? "text-xs" : ""}`}>
              {new Date(comment.created_at).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="mt-3 mb-4 pb-2">
          {(isCommentChild && comment.comment?.user.id !== comment.user.id) && <span className={`fw-bold text-primary mb-1 ${isCommentChild ? "text-sm" : ""}`}>{comment.comment?.user.username}</span>}

          <span> {comment.comment_content}</span>
        </p>

        <div className="small d-flex justify-content-start">
          <div className="d-flex align-items-center me-3 cursor-pointer">
            <i className="far fa-thumbs-up me-2"></i>
            <p className="mb-0">Like</p>
          </div>
          <div className="d-flex align-items-center me-3 cursor-pointer" onClick={() => setIdCommentEditShow(comment.id)}>
            <i className="far fa-comment-dots me-2"></i>
            <p className="mb-0">Comment</p>
          </div>
          <div className="d-flex align-items-center me-3 cursor-pointer">
            <i className="fas fa-share me-2"></i>
            <p className="mb-0">Share</p>
          </div>
        </div>
      </div>

      {comment.id === idCommentEditShow && <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="d-flex flex-start w-100">
          <img className="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
            height="40" />
          <div data-mdb-input-init className="form-outline w-100">
            <textarea className="form-control" id="textAreaExample" rows={4}
              style={{
                background: "#fff"
              }}></textarea>
            <label className="form-label" htmlFor="textAreaExample">Message</label>
          </div>
        </div>
        <div className="float-end mt-2 pt-1">
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm mr-4">Post comment</button>
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm" onClick={() => setIdCommentEditShow(0)}>Cancel</button>
        </div>
      </div>}

      {comment.comments?.length > 0 && comment.comments.map(commentChild => {
        return (
          <Comment
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
