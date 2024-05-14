import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../services/authService";
import { RegisterState } from "../../types";
import axios from "axios";

const registerUser = createAsyncThunk('auth/register', async (data: RegisterState, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await register('/register-user', data, config)
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

export { registerUser }