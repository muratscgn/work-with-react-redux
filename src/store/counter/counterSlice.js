import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 100 }

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      console.log("increment", state)
      state.value++;
    },
    addMore(state, action) {
      console.log("addMore", state, action)
      state.value += action.payload
    },
    reset(state) {
      return initialState
    }
  }
})

export const { increment, addMore, reset } = counterSlice.actions
export default counterSlice.reducer