import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import pcBuildSlice from './fetures/pcBuildSlice'

export default configureStore({
    reducer: {
        pcBuild: pcBuildSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})