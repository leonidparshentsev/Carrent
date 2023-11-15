// редьюсер для локального контроля над поисковыми инпутами.

const inputReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PICKUP_LOCATION': 
            return {...state, pickUpLocation: action.payload};
            // return state;
        case 'SET_DROPOFF_LOCATION': 
            return {...state, dropOffLocation: action.payload};
            // state.dropOffLocation = action.payload;
            // return state;
        case 'SET_PICKUP_TIME':
            return {...state, pickUpTime: action.payload};
            // state.pickUpTime = action.payload;
            // return state;
        case 'SET_DROPOFF_TIME':
            return {...state, dropOffTime: action.payload};
            // state.dropOffTime = action.payload;
            // return state;
        default:
            return state;
    }
}

export default inputReducer;
