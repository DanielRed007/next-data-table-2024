import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiHandler } from "../lib/api/apiHandler";

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
      //   const response = await apiHandler({
      //     endpoint: "/api/info",
      //     method: "GET",
      //     headers: { "Content-Type": "application/json" },
      //   });

      const response = await fetch("http://localhost:3000/api/info/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      // console.table(response);

      if (!response.ok) {
        throw new Error("Network response was not ok");
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
      });
  },
});

export default infoSlice.reducer;
