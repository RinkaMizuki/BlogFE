import { Box } from "@mui/material";
import { Post as PostType } from "../../pages/types";
import Comment from "../Comment";
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

const Post = ({ data }: { data: PostType | null }) => {

  if (!data) return "Loading..."
  console.log(data);
  return (
    <Box>
      <span>{new Intl.DateTimeFormat('en-GB', options).format(new Date(data.created_at))}</span>
      <h1>{data.post_title}</h1>
      <div>
        {data.post_content}
      </div>
      <section style={{
        backgroundColor: "#eee"
      }}>
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              {data.comments.map(comment => {
                return (
                  <div className="card mb-4" key={comment.id}>
                    <Comment comment={comment} />
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
