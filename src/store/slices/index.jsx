import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        "http://localhost:3000/Create",
        data,
        headers
      );
      // console.log(response, "res");
      return response.data;
    } catch (error) {
      console.log(error, "error from create user");
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const idd = data.id;
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(
        `http://localhost:3000/Create/${idd}`,
        data,
        headers
      );
      console.log(response, "resip");
      return response.data;
    } catch (error) {
      console.log(error, "error from create user");
    }
  }
);

export const readUser = createAsyncThunk(
  "readUser",
  async (data, { rejectWithValue }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `http://localhost:3000/Create/`,
        data,
        headers
      );
      // console.log(response, "res");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "deletePost",
  async (data, { rejectWithValue }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.delete(
        `http://localhost:3000/Create/${data}`,

        headers
      );
      // console.log(response.data,"dr");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    isloading: false,
    issloading: false,
    refresh: false,
    error: null,
    iserror: null,
    isserror: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [createUser.pending]: (state, action) => {
      state.loading = true;
      state.users = null;
      state.error = null;
    },
    [createUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.refresh = true;
      state.users = payload;
      state.error = null;
    },
    [createUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.users = null;
      state.error = payload;
    },
    [readUser.pending]: (state, action) => {
      state.loading = true;
      state.users = null;
      state.error = null;
    },
    [readUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      state.error = null;
    },
    [readUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.users = null;
      state.error = payload;
    },
    [deletePost.pending]: (state) => {
      state.isloading = true;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.users = payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.isloading = false;
      state.isserror = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.issloading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.issloading = false;
      state.users = payload;
    },
    [updateUser.rejected]: (state, action) => {
      state.issloading = false;
      state.isserror = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { searchUser } = userSlice.actions;