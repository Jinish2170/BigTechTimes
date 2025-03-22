import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { blogAPI } from '../services/api';

export const fetchPosts = createAsyncThunk(
  'blog/fetchPosts',
  async ({ page, limit }) => {
    const response = await blogAPI.getAll(page, limit);
    return response;
  }
);

export const createPost = createAsyncThunk(
  'blog/createPost',
  async (postData) => {
    const response = await blogAPI.create(postData);
    return response;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1,
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.posts;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  }
});

export default blogSlice.reducer;
