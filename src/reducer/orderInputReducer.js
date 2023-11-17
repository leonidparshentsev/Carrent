
const orderInputReducer = (state, action) => {
    switch(action.type) {
        case 'SET_FIRST_NAME':
            return {...state, firstName: action.payload};
        case 'SET_LAST_NAME':
            return { ...state, lastName: action.payload };
        case 'SET_PHONE_NUMBER':
            return { ...state, phoneNumber: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_CARD_NUMBER':
            return { ...state, cardNumber: action.payload };
        case 'SET_CARD_DATE':
            return { ...state, cardDate: action.payload };
        case 'SET_CARD_CVC':
            return { ...state, cardCvc: action.payload };
        default:
            return state;
    }
}

export default orderInputReducer;