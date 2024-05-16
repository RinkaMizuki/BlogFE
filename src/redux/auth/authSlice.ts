import { createSlice } from '@reduxjs/toolkit'
import type { Error, User } from '../../types';
import { loginUser, logoutUser, registerUser } from './authAction';

// Define a type for the slice state
interface LoginState {
  loading: boolean;
  userInfo: User | null;
  error: Error | null;
  success: boolean;
}

// Define the initial state using that type
const initialState: LoginState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false
}

export const authSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    })
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = {
        message: payload as string,
        statusCode: 422
      };
    })
    builder.addCase(loginUser.pending, (state) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    })
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = {
        message: (payload as Error).message,
        statusCode: (payload as Error).statusCode
      };
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.userInfo = payload
    })
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.userInfo = null;
      state.error = {
        message: (payload as Error).message,
        statusCode: (payload as Error).statusCode
      };
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.userInfo = null;
      state.success = true;
    })
  }
})

export const { } = authSlice.actions

export default authSlice.reducer