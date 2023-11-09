import React from 'react';
import styles from './CarPreview.module.scss'
import Button from '../UI/Button/Button';

const CarPreview = ({car}) => {

    return (
        <article className={styles.car_preview}>
            <div className={styles.car__image}>
                <img src={`/images/models/${car?.type}/${car?.model}.png`} alt={car?.model} />
            </div>
            <div className={styles.car__about}>
                <h3 className={styles.about__title}>
                    {car?.model}
                </h3>
                <div className={styles.about__icons}></div>
                <div className={styles.about__benefits}>
                    <ul>
                        <li>500km included</li>
                        <li>Insurance included</li>
                        <li>Free cancelation up to 24h before</li>
                    </ul>
                </div>
            </div>
            <div className={styles.car__price}>
                <p>FROM</p>
                <p className={styles.price_daily}>$ {car?.price} /day</p>
                <p>TOTAL {car?.price}$</p>
                <Button green>Rent a car</Button>
            </div>
        </article>
    );
};

export default CarPreview;