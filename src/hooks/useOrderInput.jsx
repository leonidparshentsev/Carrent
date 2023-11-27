import orderInputReducer from '@/reducer/orderInputReducer';
import { useCallback, useReducer } from 'react';

const reducerInitial = {
    firstName: '',
    lastName: '', 
    phoneNumber: '', 
    email: '',
    cardNumber: '',
    cardDate: '',
    cardCvc: '',
};

const useOrderInput = () => {

    const [inputState, inputDispatch] = useReducer(orderInputReducer, reducerInitial);

    const firstName = inputState.firstName;
    const lastName = inputState.lastName;
    const phoneNumber = inputState.phoneNumber;
    const email = inputState.email;
    const cardNumber = inputState.cardNumber;
    const cardDate = inputState.cardDate;
    const cardCvc = inputState.cardCvc;

    const setFirstName = useCallback((input) => inputDispatch({type: 'SET_FIRST_NAME', payload: input}), []);
    const setLastName = useCallback((input) => inputDispatch({type: 'SET_LAST_NAME', payload: input}), []);
    const setPhoneNumber = useCallback((input) => inputDispatch({type: 'SET_PHONE_NUMBER', payload: input}), []);
    const setEmail = useCallback((input) => inputDispatch({type: 'SET_EMAIL', payload: input}), []);
    const setCardNumber = useCallback((input) => inputDispatch({type: 'SET_CARD_NUMBER', payload: input}), []);
    const setCardDate = useCallback((input) => inputDispatch({type: 'SET_CARD_DATE', payload: input}), []);
    const setCardCvc = useCallback((input) => inputDispatch({type: 'SET_CARD_CVC', payload: input}), []);

    const checkDriverInputsIsEmpty = useCallback(() => {
        if(firstName === '' 
        || lastName === '' 
        || phoneNumber === '' 
        || email === '') return true;

        return false;
    }, [firstName, lastName, phoneNumber, email]);

    const checkPaymentInputsIsEmpty = useCallback(() => {
        if(cardNumber === '' 
        || cardDate === '' 
        || cardCvc === '') return true;

        return false;
    }, [cardNumber, cardDate, cardCvc]);

    return ({ firstName,
    lastName, 
    phoneNumber, 
    email,
    cardNumber,
    cardDate,
    cardCvc,
    setFirstName,
    setLastName, 
    setPhoneNumber,
    setEmail,
    setCardNumber,
    setCardDate,
    setCardCvc,
    checkDriverInputsIsEmpty,
    checkPaymentInputsIsEmpty
    });
};

export default useOrderInput;