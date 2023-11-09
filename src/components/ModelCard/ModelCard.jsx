import React from 'react';
import styles from './ModelCard.module.scss'
import Button from '../UI/Button/Button';
import classNames from 'classnames';
// import haval from '../../../public/images/models/haval.webp'


const ModelCard = ({car}) => {

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
                <img src={`./images/models/${car.type}/${car.model}.png`} alt="Popular model" />
            </div>
            <h4 className={styles.model__title}>{car.model}</h4>
            <p className={styles.model__price}>
                Price from <span>{car.price}$ /day</span>
            </p>
            <Button style={{width: '100%'}} green>Rent a Car</Button>
        </div>
    );
};

export default ModelCard;