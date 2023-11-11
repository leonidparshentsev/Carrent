import { createSlice } from "@reduxjs/toolkit";

const initial = {
    pickUpLoc: '',
    returnLoc: '',
    pickUpTime: new Date(Date.now()).getTime(),
    dropOffTime: new Date(Date.now() + (24*60*60*1000)).getTime(),
    carType: '',
    carId: 1,
}
// console.log(new Date('2023-11-09T14:30').getTime());

export const orderSlice = createSlice({
    name: 'order',
    initialState: initial,
    reducers: {
        setType: (state, action) => {state.carType = action.payload},
        setCarId: (state, action) => {state.carId = action.payload},
        setPickUpLoc: (state, action) => {state.pickUpLoc = action.payload},
        setReturnLoc: (state, action) => {state.returnLoc = action.payload},
        setPickUpTime: (state, action) => {state.pickUpTime = action.payload},
        setDropOffTime: (state, action) => {state.dropOffTime = action.payload},
    },
});

export const { setType, setCarId, setPickUpLoc, setReturnLoc, setPickUpTime, setDropOffTime } = orderSlice.actions;

export default orderSlice.reducer;