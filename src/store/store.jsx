import { configureStore } from "@reduxjs/toolkit";
import  movieReducer  from './reducers/MovieSlice'

export const store = configureStore({
    reducer:{
        movie : movieReducer,
    }
})