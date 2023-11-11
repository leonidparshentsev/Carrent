import { useSelector, useDispatch } from 'react-redux';
import { setDropOffTime, setPickUpLoc, setPickUpTime, setReturnLoc } from '@/reducer/orderSlice';

const useInputs = () => {

    const orderState = useSelector(state => state.order);
    const dispatch = useDispatch();

    const pickUpLoc = orderState.pickUpLoc;
    const pickUpTime = orderState.pickUpTime;
    const returnLoc = orderState.returnLoc;
    const dropOffTime = orderState.dropOffTime;
    const changePickUpLocHandler = (loc) => dispatch(setPickUpLoc(loc));
    const changeReturnLocHandler = (loc) => dispatch(setReturnLoc(loc));
    const changePickUpTimeHandler = (time) => dispatch(setPickUpTime(time));
    const changeDropOffHandler = (time) => dispatch(setDropOffTime(time));

    return [pickUpLoc,
            pickUpTime,
            returnLoc,
            dropOffTime,
            changePickUpLocHandler, 
            changeReturnLocHandler, 
            changePickUpTimeHandler, 
            changeDropOffHandler];
};

export default useInputs;