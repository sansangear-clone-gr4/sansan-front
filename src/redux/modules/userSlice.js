import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";
import { setCookie } from "../../shared/Cookie";

const initialState = {
  user: [],
  userCheck: null,
  isSuccess: false,
  isLoading: false,
  error: null,
};

export const __userCheck = createAsyncThunk(
  "userCheck",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/user/idCheck/${payload}`);
      console.log("중복확인:", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __signUp = createAsyncThunk(
  "signUP",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/user/signup", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __login = createAsyncThunk("login", async (payload, thunkAPI) => {
  try {
    const { data } = await instance.post("/api/user/login", payload);
    setCookie(data.headers.authorization);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reduvers: {},
  extraReducers: {
    //중복확인 하는 부분
    [__userCheck.pending]: (state) => {
      state.isLoading = true;
    },
    [__userCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      action.payload.statusCode === 200
        ? (state.userCheck = true)
        : (state.userCheck = false);
      console.log("extrareducer에서 ", state.userCheck);
    },
    [__userCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(state.error.request.status);
      state.error.request.status === 400
        ? (state.userCheck = false)
        : (state.userCheck = null);
    },
  },
});

export default userSlice.reducer;
