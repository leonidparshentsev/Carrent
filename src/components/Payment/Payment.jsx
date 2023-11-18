import React from 'react';
import styles from './Payment.module.scss'
import GrayBlock from '../UI/GrayBlock/GrayBlock';
import Button from '../UI/Button/Button';
import PriceOverview from '../PriceOverview/PriceOverview';
import BookingInput from '../UI/BookingInput/BookingInput';
import useOrderInput from '@/hooks/useOrderInput';

const Payment = ({setCurrentStatus, car, daysCount, additionalCost, isInputIncorrect}) => {

    const { cardNumber,
        cardDate,
        cardCvc,
        setCardNumber,
        setCardDate,
        setCardCvc,
        checkPaymentInputsIsEmpty } = useOrderInput();

    return (
        <div className={styles.payment}>
            <h2 className={styles.main_title}>Payment</h2>
            {
                isInputIncorrect && (
                    <p className={styles.invalid_message}>
                        It is necessary to fill in all fields
                    </p>
                )
            }
            <div className={styles.payment__block}>
                <BookingInput label='Card number' type='number'
                    invalid={isInputIncorrect && !cardNumber}
                    value={cardNumber}
                    setValue={setCardNumber}
                    />
                <div className={styles.card_info}>
                    <div className={styles.label_container}>
                        <BookingInput label='Expiration date' type='number' 
                            invalid={isInputIncorrect && !cardDate}
                            value={cardDate}
                            setValue={setCardDate}
                            />
                    </div>
                    <div className={styles.label_container}>
                        <BookingInput label='CVC' type='password' 
                            invalid={isInputIncorrect && !cardCvc}
                            value={cardCvc}
                            setValue={setCardCvc}
                            />
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
                onClick={() => {
                    if(checkPaymentInputsIsEmpty()) {
                        setCurrentStatus(true);
                    } else {
                        setCurrentStatus(false);
                    }
                }}>Pay</Button>
        </div>
    );
};

export default Payment;