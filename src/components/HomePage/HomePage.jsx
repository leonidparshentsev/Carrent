import React from 'react';
import styles from './HomePage.module.scss'
import Button from '../UI/Button/Button';
import Image from 'next/image';

import mini from '../../../public/images/mini.png';
import CarBoard from '../UI/CarBoard/CarBoard';
import Input from '../UI/Input/Input';

const HomePage = () => {

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
                                src={mini}
                                sizes='100%'
                                alt="Main page car photo"
                                fill />
                        </div>
                    </div>
                    <div className={styles.home__search}>
                        <div className={styles.wrapper}>
                            <CarBoard title='VEHICLE TYPE' />
                        </div>
                        <div className={styles.wrapper}>
                            <Input
                                label='PICK UP & RETURN LOCATION'
                                placeholder='Pick up & Return location' />
                        </div>
                        <div className={styles.search__time}>
                            <div className={styles.wrapper}>
                                <Input label='PICK UP TIME' time />
                            </div>
                            <div className={styles.wrapper}>
                                <Input label='DROP OFF TIME' time />
                            </div>
                        </div>
                        <Button green
                            style={{
                                padding: '1rem 4rem',
                                alignSelf: 'start'
                            }}
                        >Search</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;