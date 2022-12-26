import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

const initialState = {
  user: [],
  userCheck: null,
  userSignup: null,
  isLoading: false,
  error: null,
};

export const __userCheck = createAsyncThunk(
  "userCheck",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get(`/user/signup/${payload}`);
      console.log("중복확인:", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
      action.payload.statusCode === 200
        ? (state.userCheck = true)
        : (state.userCheck = false);
    },
    [__userCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
