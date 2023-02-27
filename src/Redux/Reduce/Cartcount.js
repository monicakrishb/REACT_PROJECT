import { createSlice } from "@reduxjs/toolkit";

const cartCount=createSlice({initialState:{count:[]},name:"cart",reducers:{setCount(state,action){state.count=action.payload}}})
export default cartCount;
export const {setCount}=cartCount.actions