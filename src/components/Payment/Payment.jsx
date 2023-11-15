import React from 'react';
import styles from './Payment.module.scss'
import GrayBlock from '../UI/GrayBlock/GrayBlock';
import Button from '../UI/Button/Button';
import PriceOverview from '../PriceOverview/PriceOverview';
import BookingInput from '../UI/BookingInput/BookingInput';

const Payment = ({setCurrentStatus, car, daysCount, additionalCost}) => {

    return (
        <div className={styles.payment}>
            <h2 className={styles.main_title}>Payment</h2>
            <div className={styles.payment__block}>
                <BookingInput label='Card number' type='number'/>
                <div className={styles.card_info}>
                    <div className={styles.label_container}>
                        <BookingInput label='Expiration date' type='number' />
                    </div>
                    <div className={styles.label_container}>
                        <BookingInput label='CVC' type='password' />
                    </div>
                </div>
            </div>
            <GrayBlock style={{marginBottom: '2rem'}}>
                <PriceOverview car={car} 
                    daysCount={daysCount}
                    additionalCost={additionalCost}/>
            </GrayBlock>
            <Button green
                style={{width: '80%', alignSelf: 'center'}}
                onClick={setCurrentStatus}>Pay</Button>
        </div>
    );
};

export default Payment;