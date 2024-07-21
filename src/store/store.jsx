import { configureStore } from "@reduxjs/toolkit";
import  movieReducer  from './reducers/MovieSlice'
import  tvReducer  from './reducers/tvSlice'

export const store = configureStore({
    reducer:{
        movie : movieReducer,
        tv: tvReducer,
    }
})