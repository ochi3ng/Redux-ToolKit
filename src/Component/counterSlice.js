import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
 
export const getProducts=createAsyncThunk("posts/getPosts",async()=>{
 return fetch("https://fakestoreapi.com/products/").then((res)=>res.json()
 
 ); 
});

const counterSlice=createSlice(({
  name:"products",
  initialState:{
    posts: [],
    loading: false
},
extraReducers:{
  [getProducts.pending]:(state,action)=>{
    state.loading=true;
  },
  [getProducts.fulfilled]:(state,action)=>{
    state.loading=false;
    state.posts=action.payload
    
  },
  [getProducts.rejected]:(state,action) => {
    state.loading=false;
  },
},
}));
export default counterSlice.reducer
