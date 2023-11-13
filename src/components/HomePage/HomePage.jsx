import React from 'react';
import styles from './HomePage.module.scss'
import Button from '../UI/Button/Button';
import Image from 'next/image';

import mini from '../../../public/images/mini.png';
import CarBoard from '../UI/CarBoard/CarBoard';
import Input from '../UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '@/reducer/orderSlice';
import Link from 'next/link';
import useInputs from '@/hooks/useInputs';

const HomePage = () => {

    const orderState = useSelector(state => state.order);
    const dispatch = useDispatch();

    const changeCarTypeHandler = (type)=> {
        if(type !== orderState.carType) {
            dispatch(setType(type));
        } else {
            dispatch(setType(''));
        }
    };

    const {pickUpLoc,
        pickUpTime,
        dropOffTime,
        changePickUpLocHandler,
        changePickUpTimeHandler, 
        changeDropOffHandler} = useInputs();

    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.home__main}>
                        <h1 className={styles.main__title}>
                            Mobility when you need it
                        </h1>
                        <div className={styles.main__img}>
                            <Image
                                priority
                                src={mini}
                                sizes='100%'
                                alt="Main page car photo"
                                fill />
                        </div>
                    </div>
                    <div className={styles.home__search}>
                        <div className={styles.wrapper}>
                            <CarBoard title='VEHICLE TYPE' 
                                activeType={orderState.carType}
                                setActiveType={changeCarTypeHandler} 
                                />
                        </div>
                        <div className={styles.wrapper}>
                            <Input
                                label='PICK UP & RETURN LOCATION'
                                placeholder='Pick up & Return location'
                                initialLoc={pickUpLoc}
                                changeLoc={changePickUpLocHandler}
                                />
                        </div>
                        <div className={styles.search__time}>
                            <div className={styles.wrapper}>
                                <Input label='PICK UP TIME' time
                                    initialDate={pickUpTime}
                                    changeDate={changePickUpTimeHandler} />
                            </div>
                            <div className={styles.wrapper}>
                                <Input label='DROP OFF TIME' time
                                    initialDate={dropOffTime}
                                    changeDate={changeDropOffHandler} />
                            </div>
                        </div>
                        <Link href='cars' className={styles.link}>
                            <Button green
                                style={{
                                    padding: '1rem 4rem',
                                    alignSelf: 'start'
                                }}
                            >Search</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;