import carsSlice from "@/reducer/carsSlice";
import filterSlice from "@/reducer/filterSlice";
import orderSlice from "@/reducer/orderSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        cars: carsSlice,
        filter: filterSlice,
        order: orderSlice
    } 
})