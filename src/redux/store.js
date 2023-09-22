import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import builtPcSlice from "./fetures/builtPcSlice";

export default configureStore({
reducer: {
    pcBuilt:builtPcSlice,
    [apiSlice.reducerPath]:apiSlice.reducer
},
middleware: getDefaultMiddleware =>
getDefaultMiddleware().concat(apiSlice.middleware)
});