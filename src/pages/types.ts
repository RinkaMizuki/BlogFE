interface Post {
  id: number;
  post_title: string;
  post_content: string;
  post_thumbnail: string;
  url: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string | null;
  cat_id: number;
  post_thumbnail_public_id: string | null;
  cat_title: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface AllPostResponse {
  current_page: number;
  data: Post[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface Category {
  id: number;
  cat_title: string;
  url: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}


export { type Post, type Link, type AllPostResponse, type Category }