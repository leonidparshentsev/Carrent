import { useDispatch } from 'react-redux';
import Link from 'next/link';
import styles from './ModelCard.module.scss'
import classNames from 'classnames';
import { setCarId } from '@/reducer/orderSlice';
import Button from '../UI/Button/Button';
import ImageWithLoader from '../UI/ImageWithLoader/ImageWithLoader';

const ModelCard = ({car}) => {

    const dispatch = useDispatch();

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
                <ImageWithLoader 
                    sizes='100%'
                    src={`/images/models/${car.type}/${car.model}.png`} 
                    alt="Popular model"
                    fill
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