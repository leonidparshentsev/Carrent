import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './BookingPage.module.scss'
import Status from '../Status/Status';
import SelectedCar from '../SelectedCar/SelectedCar';
import DriverDetails from '../DriverDetails/DriverDetails';
import RentalCondition from '../RentalCondition/RentalCondition';
import Accessories from '../Accessories/Accessories';
import Payment from '../Payment/Payment';
import SuccessPayment from '../SuccessPayment/SuccessPayment';
import { setNewOrder } from '@/reducer/userAccountSlice';
import useSearchInputs from '@/hooks/useSearchInputs';
import useScrollTo from '@/hooks/useScrollTo';
import { convertToDate, convertToTime } from '@/utils/convertTimestamp';
import initial from '../../../public/DB.json'

const BookingPage = ({params}) => {

    const dispatch = useDispatch();

    // 'condition' / 'driver' / 'payment' / 'payment-done'
    const [currentStatus, setCurrentStatus] = useState('condition');
    const [additionalCost, setAdditionalCost] = useState(0);
    const [isInputIncorrect, setInputIncorrect] = useState(false);
    const [ref, scrollToRef] = useScrollTo();

    const { globalPickUpLocation, globalDropOffLocation, globalPickUpTime, globalDropOffTime } = useSearchInputs();

    const currentCar = initial.cars[params.id - 1];
    const daysCount = Math.floor((globalDropOffTime - globalPickUpTime) / ((24*59*60*1000)));
    
    const order = {
            carId: params.id,
            totalPrice: ((currentCar?.price * daysCount) + additionalCost).toFixed(2),
            pickUpPlace: globalPickUpLocation,
            pickUpDate: convertToDate(globalPickUpTime, '.'),
            pickUpTime: convertToTime(globalPickUpTime),
            dropOffPlace: globalDropOffLocation,
            dropOffDate: convertToDate(globalDropOffTime, '.'),
            dropOffTime: convertToTime(globalDropOffTime),
    };

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