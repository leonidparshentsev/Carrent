import React from 'react';
import styles from './SelectedCar.module.scss'
import { useSelector } from 'react-redux';
import GrayBlock from '../UI/GrayBlock/GrayBlock';

const SelectedCar = ({carId}) => {
    const carList = useSelector(state => state.cars);

    return (
        // <div className={styles.selected_car}>
        <GrayBlock>
            <h2 className={styles.main_title}>Your selection</h2>
            <div className={styles.image}>
                <img src={`/images/models/${carList[carId].type}/${carList[carId].model}.png`} alt=""/>
            </div>
            <h4 className={styles.model_title}>{carList[carId].model}</h4>
            <div className={styles.overview}>
                <h3 className={styles.overview__title}>Performance overview</h3>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>Vehicle</h5>
                    <p className={styles.block__text}>
                        <span>Vehicle Subtotal</span>
                        <span>$ {carList[carId].price}</span>
                    </p>
                    <p className={styles.block__text}>
                        <span>Unlimited kilometers</span>
                        <span>Inclusive</span>
                    </p>
                </div>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>Protection and extras</h5>
                    <p className={styles.block__text}>
                        <span>Third party insurance</span>
                        <span>Inclusive</span>
                    </p>
                    <p className={styles.block__text}>
                        <span>Registration Fee / Road Tax</span>
                        <span>Inclusive</span>
                    </p>
                </div>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>Taxes & Fees</h5>
                    <p className={styles.block__text}>
                        <span>VAT</span>
                        <span>Inclusive</span>
                    </p>
                </div>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>
                        <span>Your total price</span>
                        <span>$ {carList[carId].price}</span>
                    </h5>
                </div>
            </div> 
        </GrayBlock>
        // </div>
    );
};

export default SelectedCar;