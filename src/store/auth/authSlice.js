import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    id: null,
  },
  reducers: {
    logIn(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
    },
    logOut(state) {
      state.email = null
      state.id = null
    }
  }
})


export const { logIn, logOut} = authSlice.actions

export default authSlice.reducer
