import React from 'react';
import styles from './DriverDetails.module.scss'
import GrayBlock from '../UI/GrayBlock/GrayBlock';
import Button from '../UI/Button/Button';
import PriceOverview from '../PriceOverview/PriceOverview';
import BookingInput from '../UI/BookingInput/BookingInput';
import useOrderInput from '@/hooks/useOrderInput';

const DriverDetails = ({setCurrentStatus, 
        car, 
        daysCount, 
        additionalCost, 
        isInputIncorrect}) => {

    const { firstName,
        lastName, 
        phoneNumber, 
        email,
        setFirstName,
        setLastName, 
        setPhoneNumber,
        setEmail,
        checkDriverInputsIsEmpty } = useOrderInput();

    return (
        <div className={styles.driver_details}>
            <h2 className={styles.main_title}>Driver details</h2>
            {
                isInputIncorrect && (
                    <p className={styles.invalid_message}>
                        It is necessary to fill in all fields
                    </p>
                )
            }
            <div className={styles.name}>
                <div className={styles.label_container}>
                    <BookingInput label='First name' type='text'
                        invalid={isInputIncorrect && !firstName}
                        value={firstName} 
                        setValue={setFirstName} 
                        />
                </div>
                <div className={styles.label_container}>
                    <BookingInput label='Last name' type='text'
                        invalid={isInputIncorrect && !lastName}
                        value={lastName} 
                        setValue={setLastName}
                        />
                </div>
            </div>
            <BookingInput label='Phone number' type='tel' 
                invalid={isInputIncorrect && !phoneNumber}
                value={phoneNumber} 
                setValue={setPhoneNumber}
                />
            <BookingInput label='Email address' type='email' 
                invalid={isInputIncorrect && !email}
                value={email} 
                setValue={setEmail}
                />
            <GrayBlock style={{marginBottom: '2.5rem'}}>
                <PriceOverview car={car} 
                    daysCount={daysCount} 
                    additionalCost={additionalCost}/>
            </GrayBlock>
            <p className={styles.cancelation}>
                Free cancelation up to 48h before pick up
            </p>
            <Button green
                style={{width: '80%', alignSelf: 'center'}}
                onClick={() => {
                    if(checkDriverInputsIsEmpty()) {
                        setCurrentStatus(true);
                    } else {
                        setCurrentStatus(false);
                    }
                }}>Confirm</Button>
        </div>
    );
};

export default DriverDetails;