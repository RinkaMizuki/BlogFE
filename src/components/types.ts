import { UserDetail } from "../types";

interface CommentType {
  id: number;
  comment_content: string;
  created_at: string;
  like: number;
  parent_comment_id: number | null;
  post_id: number;
  updated_at: string;
  user_of_comment: UserDetail;
  user_id: number;
  parent_comment: CommentType | null;
}

export { type CommentType }