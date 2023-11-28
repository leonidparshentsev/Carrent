import React, { useEffect, useReducer, useState } from 'react';
import styles from './HomePage.module.scss'
import Button from '../UI/Button/Button';
import Image from 'next/image';

import mini from '../../../public/images/mini.png';
import CarBoard from '../UI/CarBoard/CarBoard';
import DateInput from '../UI/DateInput/DateInput';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '@/reducer/orderSlice';
import useSearchInputs from '@/hooks/useSearchInputs';
import { useRouter } from 'next/navigation';
import SearchAnimation from '../UI/SearchAnimation/SearchAnimation';
import useLoader from '@/hooks/useLoader';
import LocationInput from '../UI/LocationInput/LocationInput';


const HomePage = () => {
    const router = useRouter();
    const orderState = useSelector(state => state.order);
    const dispatch = useDispatch();

    const [isLoading, showLoader] = useLoader();

    const { localPickUpLocation,
        localPickUpTime,
        localDropOffTime,
        setLocalPickUpLocation, 
        setLocalPickUpTime, 
        setLocalDropOffTime,
        changeGlobalState } = useSearchInputs();

    const changeCarTypeHandler = (type)=> {
        if(type !== orderState.carType) {
            dispatch(setType(type));
        } else {
            dispatch(setType(''));
        }
    };

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
                            <LocationInput label='PICK UP & RETURN LOCATION'
                                placeholder='Pick up & Return location'
                                initialLocation={localPickUpLocation}
                                changeLocation={setLocalPickUpLocation}
                                />
                        </div>
                        <div className={styles.search__time}>
                            <div className={styles.wrapper}>
                                <DateInput label='PICK UP TIME'
                                    initialDate={localPickUpTime}
                                    changeDate={setLocalPickUpTime}
                                    />
                            </div>
                            <div className={styles.wrapper}>
                                <DateInput label='DROP OFF TIME'
                                    initialDate={localDropOffTime}
                                    changeDate={setLocalDropOffTime}
                                    />
                            </div>
                        </div>
                        <Button green
                            onClick={() => {
                                changeGlobalState();
                                showLoader(() => router.push('/cars'));
                            }}
                            style={{
                                padding: '1rem 4rem',
                                alignSelf: 'start'
                            }}
                        >Search</Button>
                    </div>
                </div>
            </div>
            {isLoading && <SearchAnimation/>}
        </section>
    );
};

export default HomePage;