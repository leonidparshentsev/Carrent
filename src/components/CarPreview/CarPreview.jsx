import { useDispatch } from 'react-redux';
import { setCarId } from '@/reducer/orderSlice';
import { useRouter } from 'next/navigation';
import styles from './CarPreview.module.scss'
import classNames from 'classnames';
import Button from '../UI/Button/Button';

const CarPreview = ({inUserAccount, car, orderData}) => {
    
    const route = useRouter();
    const dispatch = useDispatch();

    return (
        <article className={styles.car_preview}>
            <div className={styles.car__image}>
                <img src={`/images/models/${car?.type}/${car?.model}.png`} 
                    alt={car?.model} />
            </div>
            <div className={styles.car__about}>
                <h3 className={styles.about__title}>
                    {car?.model}
                </h3>
                <div className={styles.about__icons}></div>
                {inUserAccount ? 
                <>
                    <div className={styles.trip_data}>
                        <div className={styles.data}>
                            <h4 className={styles.data__title}>PICK UP</h4>
                            <p className={classNames(styles.data__text, styles.place)}>
                                {orderData.pickUpPlace}
                            </p>
                            <p className={classNames(styles.data__text, styles.date)}>
                                {orderData.pickUpDate}
                            </p>
                            <p className={classNames(styles.data__text, styles.time)}>
                                {orderData.pickUpTime}
                            </p>
                        </div>
                        <div className={styles.data}>
                            <h4 className={styles.data__title}>DROP OFF</h4>
                            <p className={classNames(styles.data__text, styles.place)}>
                                {orderData.dropOffPlace}
                            </p>
                            <p className={classNames(styles.data__text, styles.date)}>
                                {orderData.dropOffDate}
                            </p>
                            <p className={classNames(styles.data__text, styles.time)}>
                                {orderData.dropOffTime}
                            </p>
                        </div>
                    </div>
                </>
                :
                    <div className={styles.about__benefits}>
                        <ul>
                            <li>500km included</li>
                            <li>Insurance included</li>
                            <li>Free cancelation up to 24h before</li>
                        </ul>
                    </div>
                }               
            </div>
            <div className={styles.car__price}>
                {inUserAccount ? 
                <>
                    <p>Price total</p>
                    <p className={styles.price_daily}>$ {orderData.totalPrice}</p>
                </>
                :
                <>
                    <p>FROM</p>
                    <p className={styles.price_daily}>$ {car?.price} /day</p>
                    <p>TOTAL {car?.price}$</p>
                    <Button green
                        onClick={() => {
                            dispatch(setCarId(car?.id));
                            route.push(`/book/${car.id}`);
                        }}
                    >Rent a car
                    </Button>
                </>
                }
            </div>
        </article>
    );
};

export default CarPreview;