import { configureStore } from "@reduxjs/toolkit";
import cartCount from "./Reduce/Cartcount";


export default configureStore({reducer:{cart:cartCount.reducer}})