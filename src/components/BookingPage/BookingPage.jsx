import React, { Fragment, useEffect, useMemo, useState } from 'react';
import styles from './BookingPage.module.scss'
import Status from '../Status/Status';
import SelectedCar from '../SelectedCar/SelectedCar';
import DriverDetails from '../DriverDetails/DriverDetails';
import RentalCondition from '../RentalCondition/RentalCondition';
import Accessories from '../Accessories/Accessories';
import { useDispatch, useSelector } from 'react-redux';
import { setCarId } from '@/reducer/orderSlice';
import Payment from '../Payment/Payment';
import useSearchInputs from '@/hooks/useSearchInputs';
import SuccessPayment from '../SuccessPayment/SuccessPayment';
import useScrollTo from '@/hooks/useScrollTo';
import { setNewOrder } from '@/reducer/userAccountSlice';
import { convertToDate, convertToTime } from '@/utils/convertTimestamp';

const BookingPage = ({params}) => {

    const carsList = useSelector(state => state.cars);
    const dispatch = useDispatch();

    // 'condition' / 'driver' / 'payment' / 'payment-done'
    const [currentStatus, setCurrentStatus] = useState('condition');
    const [currentCar, setCurrentCar] = useState(carsList[params.id - 1]);
    const [additionalCost, setAdditionalCost] = useState(0);
    const [isInputIncorrect, setInputIncorrect] = useState(false);

    const { globalPickUpLocation, globalDropOffLocation, globalPickUpTime, globalDropOffTime } = useSearchInputs();
    const daysCount = Math.floor((globalDropOffTime - globalPickUpTime) / ((24*59*60*1000)));
    const [ref, scrollToRef] = useScrollTo();

    const order = useMemo(() => {
        return {
            carId: params.id,
            totalPrice: (currentCar.price * daysCount) + additionalCost,
            pickUpPlace: globalPickUpLocation,
            pickUpDate: convertToDate(globalPickUpTime, '.'),
            pickUpTime: convertToTime(globalPickUpTime),
            dropOffPlace: globalDropOffLocation,
            dropOffDate: convertToDate(globalDropOffTime, '.'),
            dropOffTime: convertToTime(globalDropOffTime),
        }
    }, [params.id, globalPickUpLocation, globalDropOffLocation, globalPickUpTime, globalDropOffTime, currentCar.price, daysCount, additionalCost])

    useEffect(() => {
        setCurrentCar(carsList[params.id - 1]);
        dispatch(setCarId(params.id));
    }, [dispatch, carsList, params.id])

    const markInvalidInputs = (isIncorrect) => {
        if(isIncorrect) {
            setInputIncorrect(true);

            setTimeout(() => {
                setInputIncorrect(false);
            }, 3000);
            return true;
        }
        return false;
    };

    return (
        <div ref={ref}>
        <Status status={currentStatus}/>
        <section className={styles.booking}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {currentStatus === 'condition' &&
                    <>
                        <RentalCondition 
                            car={currentCar}
                            isInputIncorrect={isInputIncorrect}/>
                        <Accessories 
                            car={currentCar}
                            daysCount={daysCount}
                            additionalCost={additionalCost}
                            setAdditionalCost={setAdditionalCost}
                            setCurrentStatus={(isIncorrect) => {
                                if(!markInvalidInputs(isIncorrect)) {
                                    scrollToRef();
                                    setCurrentStatus('driver');
                                }
                            }}/>
                    </>
                    }
                    {currentStatus === 'driver' &&
                    <>
                        <SelectedCar car={currentCar}/>
                        <DriverDetails 
                            car={currentCar}
                            daysCount={daysCount}
                            additionalCost={additionalCost}
                            isInputIncorrect={isInputIncorrect}
                            setCurrentStatus={(isIncorrect) => {
                                if(!markInvalidInputs(isIncorrect)) {
                                    setCurrentStatus('payment');
                                    scrollToRef();
                                }
                            }}/>
                    </>
                    }
                    {currentStatus === 'payment' &&
                    <>
                        <SelectedCar car={currentCar}/>
                        <Payment
                            car={currentCar}
                            daysCount={daysCount}
                            additionalCost={additionalCost}
                            isInputIncorrect={isInputIncorrect}
                            setCurrentStatus={(isIncorrect) => {
                                if(!markInvalidInputs(isIncorrect)) {
                                    setCurrentStatus('payment-done');
                                    scrollToRef();
                                    dispatch(setNewOrder(order));
                                }
                            }}/>
                    </>
                    }
                    {currentStatus === 'payment-done' &&
                        <SuccessPayment/>
                    }   
                </div>
            </div>
        </section>
        </div>
    );
};


export default BookingPage;