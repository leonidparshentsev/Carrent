import { createSlice } from "@reduxjs/toolkit";

const initial = {
    carType: '',
    carId: 1,
    globalPickUpLocation: '',
    globalDropOffLocation: '',
    globalPickUpTime: new Date(Date.now() + (24*60*60*1000)).getTime(), 
    globalDropOffTime: new Date(Date.now() + (24*60*60*1000*2)).getTime(),
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initial,
    reducers: {
        setType: (state, action) => {state.carType = action.payload},
        setCarId: (state, action) => {state.carId = action.payload},
        setGlobalPickUpLocation: (state, action) => {state.globalPickUpLocation = action.payload},
        setGlobalDropOffLocation: (state, action) => {state.globalDropOffLocation = action.payload},
        setGlobalPickUpTime: (state, action) => {state.globalPickUpTime = action.payload},
        setGlobalDropOffTime: (state, action) => {state.globalDropOffTime = action.payload},
    },
});

export const { setType, 
        setCarId, 
        setGlobalPickUpLocation, 
        setGlobalDropOffLocation, 
        setGlobalPickUpTime, 
        setGlobalDropOffTime } = orderSlice.actions;

export default orderSlice.reducer;