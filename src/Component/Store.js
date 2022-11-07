import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './counterSlice';

 export default configureStore({
  reducer:{
    products:productsReducer,
  },
 })