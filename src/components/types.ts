import { UserDetail } from "../types";

interface CommentType {
  comments: CommentType[]; // Assuming this is for nested comments
  id: number;
  comment_content: string;
  created_at: string;
  like: number;
  parent_comment_id: number | null;
  post_id: number;
  updated_at: string;
  user: UserDetail;
  parentUser?: UserDetail;
  user_id: number;
  comment?: {
    id: number;
    comment_content: string;
    created_at: string;
    like: number;
    parent_comment_id: number | null;
    post_id: number;
    updated_at: string;
    user: UserDetail;
    parentUser: UserDetail;
    user_id: number;
  }
}

export { type CommentType }