// редьюсер для локального контроля над поисковыми инпутами.

const searchInputReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PICKUP_LOCATION': 
            return {...state, pickUpLocation: action.payload};
        case 'SET_DROPOFF_LOCATION': 
            return {...state, dropOffLocation: action.payload};
        case 'SET_PICKUP_TIME':
            return {...state, pickUpTime: action.payload};
        case 'SET_DROPOFF_TIME':
            return {...state, dropOffTime: action.payload};
        default:
            return state;
    }
}

export default searchInputReducer;
