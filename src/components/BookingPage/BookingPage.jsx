import React, { useState } from 'react';
import styles from './BookingPage.module.scss'
import Status from '../Status/Status';
import SelectedCar from '../SelectedCar/SelectedCar';
import DriverDetails from '../DriverDetails/DriverDetails';
import RentalCondition from '../RentalCondition/RentalCondition';
import Accessories from '../Accessories/Accessories';

const BookingPage = () => {
    // 'condition' / 'driver' / 'payment'
    const [currentStatus, setCurrentStatus] = useState('condition');

    return (
        <>
        <Status status={currentStatus}/>
        <section className={styles.booking}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {currentStatus === 'condition' &&
                    <>
                        <RentalCondition/>
                        <Accessories 
                            setCurrentStatus={()=>setCurrentStatus('driver')}/>
                    </>
                    }
                    {currentStatus === 'driver' &&
                    <>
                        <SelectedCar carId={5}/>
                        <DriverDetails 
                            setCurrentStatus={()=>setCurrentStatus('payment')}/>
                    </>
                    }
                    {currentStatus === 'payment' &&
                    <>
                        <SelectedCar carId={5}/>
                        <DriverDetails/>
                    </>
                    }   
                </div>
            </div>
        </section>
        </>
    );
};


export default BookingPage;