import React, { useEffect, useState } from 'react';
import styles from './BookingPage.module.scss'
import Status from '../Status/Status';
import SelectedCar from '../SelectedCar/SelectedCar';
import DriverDetails from '../DriverDetails/DriverDetails';
import RentalCondition from '../RentalCondition/RentalCondition';
import Accessories from '../Accessories/Accessories';
import { useDispatch, useSelector } from 'react-redux';
import { setCarId } from '@/reducer/orderSlice';
import useInputs from '@/hooks/useInputs';
import Payment from '../Payment/Payment';

const BookingPage = ({params}) => {
    // 'condition' / 'driver' / 'payment'
    const [currentStatus, setCurrentStatus] = useState('condition');
    const carsList = useSelector(state => state.cars);
    const dispatch = useDispatch();

    const [currentCar, setCurrentCar] = useState(carsList[params.id - 1]);

    const {pickUpTime, dropOffTime} = useInputs();
    const daysCount = Math.floor((dropOffTime - pickUpTime) / ((24*59*60*1000)));

    useEffect(() => {
        setCurrentCar(carsList[params.id - 1]);
        dispatch(setCarId(params.id));
    }, [carsList])

    return (
        <>
        <Status status={currentStatus}/>
        <section className={styles.booking}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {currentStatus === 'condition' &&
                    <>
                        <RentalCondition car={currentCar}/>
                        <Accessories 
                            car={currentCar}
                            daysCount={daysCount}
                            setCurrentStatus={()=>setCurrentStatus('driver')}/>
                    </>
                    }
                    {currentStatus === 'driver' &&
                    <>
                        <SelectedCar car={currentCar}/>
                        <DriverDetails 
                            car={currentCar}
                            daysCount={daysCount}
                            setCurrentStatus={()=>setCurrentStatus('payment')}/>
                    </>
                    }
                    {currentStatus === 'payment' &&
                    <>
                        <SelectedCar car={currentCar}/>
                        <Payment
                            car={currentCar}
                            daysCount={daysCount}
                            setCurrentStatus={()=>setCurrentStatus('payment')} />
                        {/* <DriverDetails
                            car={currentCar}
                            setCurrentStatus={()=>setCurrentStatus('payment')}/> */}
                    </>
                    }   
                </div>
            </div>
        </section>
        </>
    );
};


export default BookingPage;