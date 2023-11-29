import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import styles from './ModelCard.module.scss'
import classNames from 'classnames';
import { setCarId } from '@/reducer/orderSlice';
import Button from '../UI/Button/Button';
import Loader from '../UI/Loader/Loader';

const ModelCard = ({car}) => {

    const dispatch = useDispatch();
    const [isLoaded, setLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if(ref.current) {
            setLoaded(true);
        }
    }, [ref])

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
                {!isLoaded && <Loader style={{position: 'absolute', width: '80%', height: '80%'}} />}
                <img 
                    ref={ref}
                    style={isLoaded ? { display: 'block'} : { display: 'none' }}
                    src={`./images/models/${car.type}/${car.model}.png`} 
                    alt="Popular model"
                    />
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