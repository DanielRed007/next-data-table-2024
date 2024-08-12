import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiHandler } from "../lib/api/apiHandler";
import { errorHandler } from "../util/error/error";

interface InfoState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: InfoState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchInfo = createAsyncThunk(
  "info/fetchInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiHandler({
        endpoint: "/api/info",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!Array.isArray(data) && data.error) {
        errorHandler(data);
        return rejectWithValue(data.error);
      }

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const updateInfo = createAsyncThunk(
  "info/updateInfo",
  async (updatedData: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiHandler({
        endpoint: "/api/info",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        requestBody: updatedData,
      });

      if (response.ok) {
        dispatch(fetchInfo());
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const addInfo = createAsyncThunk(
  "info/addInfo",
  async (newData: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiHandler({
        endpoint: "/api/info",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        requestBody: newData,
      });

      if (response.ok) {
        dispatch(fetchInfo());
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const deleteInfo = createAsyncThunk(
  "info/deleteInfo",
  async (_id: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiHandler({
        endpoint: "/api/info",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        requestBody: { _id },
      });

      console.table(response);

      if (response.ok) {
        dispatch(fetchInfo());
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchInfo.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateInfo.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteInfo.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addInfo.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default infoSlice.reducer;
