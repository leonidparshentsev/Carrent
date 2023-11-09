import carsSlice from "@/reducer/carsSlice";
import selectSlice from "@/reducer/selectSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        cars: carsSlice,
        select: selectSlice
    } 
})