import { createSlice } from "@reduxjs/toolkit";

const defaultSelectState = {
    price: 'default',
    seats: 'default',
    transmission: 'default'
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {...defaultSelectState},
    reducers: {
        setPrice: (state, action) => {state.price = action.payload},
        setSeats: (state, action) => {state.seats = action.payload},
        setTransmission: (state, action) => {state.transmission = action.payload},
        setDefaultSelect: state => { return {...defaultSelectState}}
    }
});

export const { setPrice, setSeats, setTransmission, setDefaultSelect } = filterSlice.actions;

export default filterSlice.reducer;