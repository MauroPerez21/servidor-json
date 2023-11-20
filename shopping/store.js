import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './admin/book-slice'

const store = configureStore({
  reducer: {books:bookSlice}
})

export default store