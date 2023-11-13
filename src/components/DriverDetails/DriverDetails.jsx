import React from 'react';
import styles from './DriverDetails.module.scss'
import GrayBlock from '../UI/GrayBlock/GrayBlock';
import Button from '../UI/Button/Button';
import useInputs from '@/hooks/useInputs';

const DriverDetails = ({setCurrentStatus, car}) => {

    const {pickUpTime, dropOffTime} = useInputs();
    const daysCount = Math.floor((dropOffTime - pickUpTime) / (24*60*60*1000)); 

    return (
        <div className={styles.driver_details}>
            <h2 className={styles.main_title}>Driver details</h2>
            <div className={styles.name}>
                <label className={styles.label}>
                    <span>First name</span>
                    <input className={styles.input} type="text" />
                </label>
                <label className={styles.label}>
                    <span>Last name</span>
                    <input className={styles.input} type="text" />
                </label>
            </div>
            <label className={styles.label}>
                <span>Phone number</span>
                <input className={styles.input} type="tel" />
            </label>
            <label className={styles.label}>
                <span>Email address</span>
                <input className={styles.input} type="email" />
            </label>
            <GrayBlock>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>
                        <span>Your total rental price</span>
                        <span>
                            $ {car?.price * daysCount}
                        </span>
                    </h5>
                    <p className={styles.block__text}>
                        <span>Rental period</span>
                        <span>
                            {daysCount}
                            {daysCount > 1 ? ' days' : ' day'}
                        </span>
                    </p>
                </div>
            </GrayBlock>
            <p className={styles.cancelation}>
                Free cancelation up to 48h before pick up
            </p>
            <Button green
                onClick={setCurrentStatus}>Confirm</Button>
        </div>
    );
};

export default DriverDetails;