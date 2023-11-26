import { createSlice } from "@reduxjs/toolkit";

const initial = {
    isAuthorized: false,
    userName: 'Name',
    userSurname: 'Surname',
    userEmail: '',
    orders: [
        // {
        //     totalPrice: '36.6',
        //     pickUpPlace: 'Domodedovo',
        //     pickUpDate: '12.10.23',
        //     pickUpTime: '12:00',
        //     dropOffPlace: 'Sheremetevo',
        //     dropOffDate: '16.10.23',
        //     dropOffTime: '16:00',
        //     carId: 1,
        // },
    ],
}

const userAccountSlice = createSlice({
    name: 'userAccount',
    initialState: initial,
    reducers: {
        setLogIn: (state, action) => {state.isAuthorized = true},
        setLogOut: (state, action) => {state.isAuthorized = true},
        setUserName: (state, action) => {state.userName = action.payload},
        setUserSurname: (state, action) => {state.userSurname = action.payload},
        setUserEmail: (state, action) => {state.userEmail = action.payload},
        setNewOrder: (state, action) => {state.orders.push(action.payload)},
    },
});

export const { setLogIn, setLogOut, setUserName, setUserSurname, setUserEmail, setNewOrder } = userAccountSlice.actions;

export default userAccountSlice.reducer;