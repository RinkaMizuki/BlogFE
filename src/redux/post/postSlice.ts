import { createSlice } from "@reduxjs/toolkit"
import { Post } from "../../pages/types"

interface PostState {
  post: Post[],
}

const initialState: PostState = {
  post: []
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setListRecentPost: function (state, { payload }) {
      state.post = payload;
    }
  },
})
export const { setListRecentPost } = postSlice.actions

export default postSlice.reducer