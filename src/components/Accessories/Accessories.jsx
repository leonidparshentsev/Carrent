import React from 'react';
import styles from './Accessories.module.scss'
import Button from '../UI/Button/Button';
import AdditionalServices from '../AdditionalService/AdditionalService';
import AdditionalService from '../AdditionalService/AdditionalService';

const benefits = ['Free cancelation up to 24h before', '500km included', 'Insurance included', 'Registration fee / Road tax'];

const Accessories = ({setCurrentStatus}) => {

    return (
        <div className={styles.accessories}>
            <h2 className={styles.main_title}>Select accessories</h2>
            <div className={styles.benefits}>
                <h3 className={styles.benefits__title}>
                    <span>The base price</span>
                    <span>$ 36.12</span>
                </h3>
                <ul className={styles.benefits__list}>
                    {benefits.map((benefit, index) => {
                        return (
                        <li key={index} className={styles.list__item}>
                            {benefit}
                        </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.additional}>
                <h3 className={styles.additional__title}>Additional services are recommended</h3>
                <AdditionalService serviceName={'crash'} />
                <AdditionalService serviceName={'theft'}/>
                <AdditionalService serviceName={'personal'}/>
            </div>
            <Button green 
                onClick={setCurrentStatus}
                style={{width: '80%', alignSelf: 'center'}}
                >Confirm</Button>
        </div>
    );
};

export default Accessories;