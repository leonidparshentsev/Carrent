// В глобальном состоянии инпутов храним данные, которые берем из локального состояния, в случае если пользователь нажал кнопку поиска.

import searchInputReducer from "@/reducer/searchInputReducer";
import { setGlobalDropOffLocation, setGlobalDropOffTime, setGlobalPickUpLocation, setGlobalPickUpTime } from "@/reducer/orderSlice";
import { useCallback, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

const reducerInitial = {
    pickUpLocation: '',
    dropOffLocation: '', 
    pickUpTime: new Date(Date.now() + (24*60*60*1000)).getTime(), 
    dropOffTime: new Date(Date.now() + (24*60*60*1000*2)).getTime(),
};

const useSearchInputs = () => {

    const [inputState, inputDispatch] = useReducer(searchInputReducer, reducerInitial);

    const localPickUpLocation = inputState.pickUpLocation;
    const localDropOffLocation = inputState.dropOffLocation;
    const localPickUpTime = inputState.pickUpTime;
    const localDropOffTime = inputState.dropOffTime;

    // actions для редьюсера локального состояния
    const setLocalPickUpLocation = useCallback((location) => {
        inputDispatch({ type: 'SET_PICKUP_LOCATION', payload: location });
    }, []);
    const setLocalDropOffLocation = useCallback((location) => {
        inputDispatch({ type: 'SET_DROPOFF_LOCATION', payload: location });
    }, []);
    const setLocalPickUpTime = useCallback((time) => {
        inputDispatch({ type: 'SET_PICKUP_TIME', payload: time });
    }, []);
    const setLocalDropOffTime = useCallback((time) => {
        inputDispatch({ type: 'SET_DROPOFF_TIME', payload: time });
    }, []);

    const orderState = useSelector(state => state.order);
    const dispatch = useDispatch();

    // Глобальное состояние поисковых инпутов
    const globalPickUpLocation = orderState.globalPickUpLocation;
    const globalDropOffLocation = orderState.globalDropOffLocation;
    const globalPickUpTime = orderState.globalPickUpTime;
    const globalDropOffTime = orderState.globalDropOffTime;

    // const changeGlobalPickUpLocation = (loc) => dispatch(setGlobalPickUpLocation(loc));
    // const changeGlobalDropOffLocation = (loc) => dispatch(setGlobalDropOffLocation(loc));
    // const changeGlobalPickUpTime = (time) => dispatch(setGlobalPickUpTime(time));
    // const changeGlobalDropOffTime = (time) => dispatch(setGlobalDropOffTime(time));


    const changeGlobalState = useCallback(() => {
        const changeGlobalPickUpLocation = (loc) => dispatch(setGlobalPickUpLocation(loc));
        const changeGlobalDropOffLocation = (loc) => dispatch(setGlobalDropOffLocation(loc));
        const changeGlobalPickUpTime = (time) => dispatch(setGlobalPickUpTime(time));
        const changeGlobalDropOffTime = (time) => dispatch(setGlobalDropOffTime(time));

        changeGlobalPickUpLocation(localPickUpLocation);
        changeGlobalPickUpTime(localPickUpTime);
        changeGlobalDropOffLocation(localDropOffLocation);
        changeGlobalDropOffTime(localDropOffTime);
    }, [localPickUpLocation, localPickUpTime, localDropOffLocation, localDropOffTime, dispatch]);


    const checkIsEmptyGlobalState = useCallback(() => {

        if(!globalPickUpLocation || !globalDropOffLocation) return true;

        return false;
    }, [globalPickUpLocation, globalDropOffLocation]);

    // На случай, если глобальное состояние инпутов задано - обновляем локальное состояние.
    useEffect(() => {
        if(globalPickUpLocation !== '') {
            setLocalPickUpLocation(globalPickUpLocation);
        } 
    }, [globalPickUpLocation, setLocalPickUpLocation])

    useEffect(() => {
        if(globalDropOffLocation !== '') {
            setLocalDropOffLocation(globalDropOffLocation);
        } 
    }, [globalDropOffLocation, setLocalDropOffLocation])

    useEffect(() => {
        if(globalPickUpTime !== '') {
            setLocalPickUpTime(globalPickUpTime);
        } 
    }, [globalPickUpTime, setLocalPickUpTime])

    useEffect(() => {
        if(globalDropOffTime !== '') {
            setLocalDropOffTime(globalDropOffTime);
        } 
    }, [globalDropOffTime, setLocalDropOffTime])

    return { localPickUpLocation,
        localDropOffLocation,
        localPickUpTime,
        localDropOffTime,
        setLocalPickUpLocation, 
        setLocalDropOffLocation, 
        setLocalPickUpTime, 
        setLocalDropOffTime,
        globalPickUpLocation,
        globalDropOffLocation,
        globalPickUpTime,
        globalDropOffTime,
        changeGlobalState,
        checkIsEmptyGlobalState };
};

export default useSearchInputs;