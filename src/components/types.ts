import { UserDetail } from "../types";

interface CommentDetail {
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

interface CommentType {
  comments: CommentType[]; // Assuming this is for nested comments
  id: number;
  repliesCount?: number;
  is_liked: boolean | undefined;
  comment_content: string;
  created_at: string;
  like: number;
  parent_comment_id: number | null;
  post_id: number;
  updated_at: string;
  user: UserDetail;
  parentUser?: UserDetail;
  user_id: number;
  comment?: CommentDetail
}

export { type CommentType, type CommentDetail }