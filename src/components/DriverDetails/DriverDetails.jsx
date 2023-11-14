import React from 'react';
import styles from './DriverDetails.module.scss'
import GrayBlock from '../UI/GrayBlock/GrayBlock';
import Button from '../UI/Button/Button';
import PriceOverview from '../PriceOverview/PriceOverview';
import BookingInput from '../UI/BookingInput/BookingInput';

const DriverDetails = ({setCurrentStatus, car, daysCount}) => {

    return (
        <div className={styles.driver_details}>
            <h2 className={styles.main_title}>Driver details</h2>
            <div className={styles.name}>
                <div className={styles.label_container}>
                    <BookingInput label='First name' type='text' />
                </div>
                <div className={styles.label_container}>
                    <BookingInput label='Last name' type='text' />
                </div>
            </div>
            <BookingInput label='Phone number' type='tel' />
            <BookingInput label='Email address' type='email' />
            <GrayBlock style={{marginBottom: '2.5rem'}}>
                <PriceOverview car={car} daysCount={daysCount}/>
            </GrayBlock>
            <p className={styles.cancelation}>
                Free cancelation up to 48h before pick up
            </p>
            <Button green
                style={{width: '80%', alignSelf: 'center'}}
                onClick={setCurrentStatus}>Confirm</Button>
        </div>
    );
};

export default DriverDetails;