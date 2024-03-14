import { configureStore } from '@reduxjs/toolkit'
import  reducerSlices  from './slices/reducer/slices'
export const store = configureStore({
  reducer: {
    services: reducerSlices,
  },
})