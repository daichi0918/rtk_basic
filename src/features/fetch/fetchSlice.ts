import { createAppSlice } from "../../app/createAppSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const apiUrl = "https://jsonplaceholder.typicode.com/users"

export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get(apiUrl)
  return res.data
})

export const fetchSlice = createAppSlice({
  name: "fetch",
  initialState: { users: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      }
    })
  },
})
export const selectUsers = (state: { fetch: { users: any[] } }) =>
  state.fetch.users
