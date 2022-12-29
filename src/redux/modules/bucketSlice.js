import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance3 } from "../../core/api/axios";

const initialState = {
  buckets: [],
  isLoading: false,
  error: null,
};

export const __getBucket = createAsyncThunk(
  "getBucket",
  async (payload, thunkAPI) => {
    try {
      const data = await instance3.get("/api/bucket");
      return thunkAPI.fulfillWithValue(data.data.bucketList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postBucket = createAsyncThunk(
  "postBucket",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await instance3.post(
        `/api/bucket/${payload[0]}`,
        payload[1]
      );
      const bucket = payload[1];
      console.log(data.config.data);
      return thunkAPI.fulfillWithValue(bucket);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteBucket = createAsyncThunk(
  "deleteBucket",
  async (payload, thunkAPI) => {
    try {
      const data = await instance3.delete(`/api/bucket/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __editBucket = createAsyncThunk(
//   "editBucket",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.put(
//         `http://43.2001.111.129/api/post/${payload[0]}`,
//         payload[1]
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       alert("수정실패ㅠ");
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

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
    [__deleteBucket.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteBucket.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.buckets = state.buckets.filter(
        (bucket) => bucket.id !== action.meta.arg
      );
    },
    [__deleteBucket.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bucketSlice.reducer;
