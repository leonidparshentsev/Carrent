import React from 'react';
import styles from './CarPreview.module.scss'
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { setCarId } from '@/reducer/orderSlice';
import { useRouter } from 'next/navigation';

const CarPreview = ({car}) => {
    
    const route = useRouter();
    const dispatch = useDispatch();

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
                <Button green
                    onClick={() => {
                        dispatch(setCarId(car?.id));
                        route.push(`/book/${car.id}`);
                    }}
                    >Rent a car</Button>
            </div>
        </article>
    );
};

export default CarPreview;