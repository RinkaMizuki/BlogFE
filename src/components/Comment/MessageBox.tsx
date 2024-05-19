import { ChangeEvent, Dispatch, useRef, useState } from "react";
import { UserDetail } from "../../types";
import { post as postComment } from "../../services/postService";
import { CommentDetail } from "../types";

interface Props {
  userLogin: UserDetail | null
  setIdCommentEditShow: (commentId: number) => void;
  commentId?: number;
  userCurrComment: UserDetail | null;
  postId: number | null;
  setToggleAddCommentId: Dispatch<React.SetStateAction<number>>;
  isReply?: boolean;
}

const MessageBox = ({ setIdCommentEditShow, userLogin, commentId, postId, setToggleAddCommentId, isReply = true }: Props) => {

  const messageBoxRef = useRef<HTMLTextAreaElement>(null)
  const [message, setMessage] = useState<string>("");

  const handlePostComment = async () => {
    try {
      let comment
      if (isReply) {
        const { comment: replyComment }: { comment: CommentDetail } = await postComment(`/posts/${postId}/${commentId}/reply-comment`, {
          comment_content: message
        })
        comment = replyComment;
      } else {
        const { comment: upComment }: { comment: CommentDetail } = await postComment(`/posts/${postId}/up-comment`, {
          comment_content: message
        })
        comment = upComment;
      }

      if (comment) {
        setToggleAddCommentId(comment.id)
      }
      setIdCommentEditShow(0)
    } catch (error) {
      console.log(error);
    } finally {
      setMessage("")
    }
  }

  return (
    <div className="card-footer py-3 border-0 flex-1" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="d-flex flex-start w-100">
        <img className="rounded-circle shadow-1-strong me-3 object-cover flex-none" src={userLogin?.avatar} alt={userLogin?.url} width="40" height="40" />
        <div data-mdb-input-init="" className="form-outline w-100 relative" data-mdb-input-initialized="true">
          <textarea
            className="form-control active"
            id="textAreaExample"
            ref={messageBoxRef}
            rows={4}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          {/* <span className="fw-bold text-primary absolute top-1 left-1" ref={userNameRef}>{userCurrComment?.username}</span> */}
          <label className="form-label" htmlFor="textAreaExample" style={{
            marginLeft: "0px"
          }}>Message</label>
          <div className="form-notch"><div className="form-notch-leading" style={{
            width: "9px"
          }}></div><div className="form-notch-middle" style={{
            width: "60px"
          }}></div><div className="form-notch-trailing"></div>
          </div>
        </div>
      </div>
      <div className="float-end mt-2 pt-1">
        <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-primary btn-sm mr-3" data-mdb-button-initialized="true" onClick={handlePostComment}>Post comment</button>
        <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-outline-primary btn-sm" data-mdb-button-initialized="true" onClick={() => setIdCommentEditShow(0)}>Cancel</button>
      </div>
    </div>
  )
};

export default MessageBox;
