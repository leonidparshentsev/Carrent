import { createSlice } from "@reduxjs/toolkit";
import initial from '../../public/DB.json'

export const carsSlice = createSlice({
    name: 'cars',
    initialState: [
        ...initial.cars
    ],
    reducers: {
        filterByPrice: (state, action) => {
            sort(state, action.payload);
        },
        filterBySeats: (state, action) => {
            state = [...initial.cars];

            if(action.payload.selectState.transmission !== 'default') {
                state = state.filter(car => car.transmission === action.payload.selectState.transmission);
            }
            if(action.payload.selectState.price !== 'default') {
                sort(state, action.payload.selectState.price);
            }

            return [...state.filter(car => car.seats === action.payload.value)]
        },
        filterByTransmission: (state, action) => {
            state = [...initial.cars];

            if(action.payload.selectState.seats !== 'default') {
                state = state.filter(car => car.seats === action.payload.selectState.seats);
            }
            if(action.payload.selectState.price !== 'default') {
                sort(state, action.payload.selectState.price);
            }

            return [...state.filter(car => car.transmission === action.payload.value)]
        },
        setInitialCars: state => [...initial.cars]
    }
});

export const { filterByPrice, filterBySeats, setInitialCars, filterByTransmission } = carsSlice.actions;

export default carsSlice.reducer;

function sort(state, value) {
    if(value === 'low') {
        state.sort((a, b) => +a.price - +b.price)
    }
    if(value === 'high') {
        state.sort((a, b) => +b.price - +a.price)
    }
    // return state;
}