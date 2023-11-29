import { createSlice } from "@reduxjs/toolkit";
import data from '../../public/DB.json'

const carsSlice = createSlice({
    name: 'cars',
    initialState: [
        ...data.cars
    ],
    reducers: {
        filterByPrice: (state, action) => {
            sort(state, action.payload);
        },
        filterBySeats: (state, action) => {
            state = [...data.cars];

            if(action.payload.transmission !== 'default') {
                state = state.filter(car => car.transmission === action.payload.transmission);
            }
            if(action.payload.price !== 'default') {
                sort(state, action.payload.price);
            }

            return [...state.filter(car => car.seats === action.payload.seats)]
        },
        filterByTransmission: (state, action) => {
            state = [...data.cars];

            // Если другие селекторы не в дефолтном положении применяем их
            if(action.payload.seats !== 'default') {
                state = state.filter(car => car.seats === action.payload.seats);
            }
            if(action.payload.price !== 'default') {
                sort(state, action.payload.price);
            }

            return [...state.filter(car => car.transmission === action.payload.transmission)]
        },
        filterByType: (state, action) => {
            return [...state.filter(car => car.type === action.payload)]
        },
        setInitialCars: state => [...data.cars]
    }
});

export const { filterByPrice, filterBySeats, setInitialCars, filterByTransmission, filterByType } = carsSlice.actions;

export default carsSlice.reducer;

function sort(state, value) {
    if(value === 'low') {
        state.sort((a, b) => +a.price - +b.price)
    }
    if(value === 'high') {
        state.sort((a, b) => +b.price - +a.price)
    }
}