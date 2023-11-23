import React, { useState } from 'react';
import styles from './ModelCard.module.scss'
import Button from '../UI/Button/Button';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setCarId } from '@/reducer/orderSlice';
import Link from 'next/link';
import Loader from '../UI/Loader/Loader';

const ModelCard = ({car}) => {

    const dispatch = useDispatch();
    const [isLoaded, setLoaded] = useState(false);

    if(car.model === undefined) {
        return (
            <>
                <div className={classNames(styles.model__card, styles.inactive)}></div>
                <div className={classNames(styles.model__card, styles.inactive)}></div>
                <div className={classNames(styles.model__card, styles.inactive)}></div>
            </>
        )
    }

    return (
        <div className={styles.model__card}>
            <div className={styles.model__image}>
                {/* {!isLoaded && <div className={styles.loader}></div>} */}
                {!isLoaded && <Loader style={{width: '80%', height: '80%'}} />}
                <img 
                    src={`./images/models/${car.type}/${car.model}.png`} 
                    alt="Popular model"
                    onLoad={() => setLoaded(true)} />
            </div>
            <h4 className={styles.model__title}>{car.model}</h4>
            <p className={styles.model__price}>
                Price from <span>{car.price}$ /day</span>
            </p>
            <Link href={`/book/${car.id}`}>
                <Button 
                    onClick={() => dispatch(setCarId(car?.id))}
                    style={{width: '100%'}} green>Rent a Car</Button>
            </Link>
        </div>
    );
};

export default ModelCard;