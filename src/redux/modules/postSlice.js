import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance2 } from "../../core/api/axios";

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
      const data = await instance2.post("/api/posts", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//(2)
//datail 컴포넌트에서 디스패치로 payload를 받아옴
//get요청하여 url주소에 payload
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

export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.put("http://localhost:3001/posts", payload, {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
        },
      });
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
      //posts 배열에 payload를 push 해줌
    },
    [__postPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__getPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    //(3)
    //_getPost가 fulfilled일때 state를 받아옴
    [__getPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload;
      //(4)서버에서 받은 payload를 post로 변환
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__editPost.fulfilled]: (state, action) => {
      console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
  },
});
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export
export const {} = postSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default
export default postSlice.reducer;
