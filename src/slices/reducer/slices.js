import { createSlice, current } from '@reduxjs/toolkit'

let initialState = {
  state:0
}

export let counterSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {

  }
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer