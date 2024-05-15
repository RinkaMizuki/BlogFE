import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/authService";
import { LoginState, RegisterState } from "../../types";
import axios from "axios";

const registerUser = createAsyncThunk('auth/register', async (data: RegisterState, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await register('/register-user', data, config)
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error?.response && typeof error.response.data.message === 'string') {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    } else {
      return rejectWithValue("Unknown error.");
    }
  }
});

const loginUser = createAsyncThunk('auth/login', async (data: LoginState, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await login('/login-user', data, config)
    console.log(res);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error?.response) {
        return rejectWithValue({
          message: error.response.data.message,
          statusCode: error.response.data.status
        })
      } else {
        return rejectWithValue({
          message: error.message,
          statusCode: error.response?.status
        })
      }
    } else {
      return rejectWithValue("Unknown error.");
    }
  }
})

export { registerUser, loginUser }