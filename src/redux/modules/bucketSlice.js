import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance2 } from "../../core/api/axios";

const initialState = {
  buckets: [],
  bucket: {},
  isLoading: false,
  error: null,
};

export const __getBucket = createAsyncThunk(
  "getBucket",
  async (payload, thunkAPI) => {
    try {
      const data = await instance2.get("/api/bucket");
      console("장바구니:", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postBucket = createAsyncThunk(
  "postBucket",
  async (payload, thunkAPI) => {
    try {
      const data = await instance2.post(
        `/api/bucket/${payload[0]}`,
        payload[1]
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducer: {},
  extraReducers: {
    [__postBucket.pending]: (state) => {
      state.isLoading = true;
    },
    [__postBucket.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.buckets.push(action.payload);
    },
    [__postBucket.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getBucket.isLoading]: (state) => {
      state.isLoading = true;
    },
    [__getBucket.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.buckets = action.payload;
    },
    [__getBucket.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bucketSlice.reducer;
