import { createSlice } from "@reduxjs/toolkit";

const defaultSelectState = {
    price: 'default',
    seats: 'default',
    transmission: 'default'
};

export const selectSlice = createSlice({
    name: 'select',
    initialState: {...defaultSelectState},
    reducers: {
        setPrice: (state, action) => {state.price = action.payload},
        setSeats: (state, action) => {state.seats = action.payload},
        setTransmission: (state, action) => {state.transmission = action.payload},
        setDefaultSelect: state => { return {...defaultSelectState}}
    }
});

export const { setPrice, setSeats, setTransmission, setDefaultSelect } = selectSlice.actions;

export default selectSlice.reducer;

// const [selectState, setSelectState] = useState({...defaultSelectState});
// const priceHandler = (e) => setSelectState({...selectState, price: e.target.value});
// const seatsHandler = (e) => setSelectState({...selectState, seats: e.target.value});
// const transmissionHandler = (e) => setSelectState({...selectState, transmission: e.target.value});