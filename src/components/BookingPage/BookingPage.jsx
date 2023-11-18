import React, { useEffect, useState } from 'react';
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

const BookingPage = ({params}) => {

    const carsList = useSelector(state => state.cars);
    const dispatch = useDispatch();

    // 'condition' / 'driver' / 'payment' / 'payment-done'
    const [currentStatus, setCurrentStatus] = useState('condition');
    const [currentCar, setCurrentCar] = useState(carsList[params.id - 1]);
    const [additionalCost, setAdditionalCost] = useState(0);
    const [isInputIncorrect, setInputIncorrect] = useState(false);

    const { globalPickUpTime, globalDropOffTime } = useSearchInputs();
    const daysCount = Math.floor((globalDropOffTime - globalPickUpTime) / ((24*59*60*1000)));

    useEffect(() => {
        setCurrentCar(carsList[params.id - 1]);
        dispatch(setCarId(params.id));
    }, [carsList])

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
        <>
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
                                    setCurrentStatus('driver')
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
                                    setCurrentStatus('payment')
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
                                    setCurrentStatus('payment-done')
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
        </>
    );
};


export default BookingPage;