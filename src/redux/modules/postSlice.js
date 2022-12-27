import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  error: null,
};

export const __postPost = createAsyncThunk(
  "postPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post("http://localhost:3001/posts", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//(2)
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.get(`http://localhost:3001/posts/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: {
    [__postPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postPost.fulfilled]: (state, action) => {
      console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__getPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    //(3)
    [__getPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload;
      //(4)
      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      //상세조회를 하기 위해 post 상태값을 만들어 push해줌
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export
export const {} = postSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default
export default postSlice.reducer;