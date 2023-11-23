import React, { useEffect, useState } from 'react';
import styles from './PopularPage.module.scss'
import CarBoard from '../UI/CarBoard/CarBoard';
import Link from 'next/link';
import ModelCard from '../ModelCard/ModelCard';
import Carousel from '../UI/Carousel/Carousel';
import initial from '../../../public/DB.json'
import classNames from 'classnames';

const PopularPage = () => {

    const [activeCarType, setActiveCarType] = useState('sedan');
    const [popularCars, setPopularCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardAnimation, setCardAnimation] = useState('previous');

    useEffect(() => {
        setPopularCars([...initial.cars.filter((car) => car.type === activeCarType)])
    }, [activeCarType]);

    return (
        <section className={styles.popular}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <CarBoard popular 
                            activeType={activeCarType}
                            setActiveType={(type) => {
                                setActiveCarType(type);
                                setCurrentPage(1);
                                }}/>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.preview_card}>
                            <h2 className={styles.preview__title}>
                                <span>Popular</span> Models
                            </h2>
                            <Link href='/cars' 
                                className={styles.preview__link}>
                                    <span>See All Cars</span>
                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#38BC55" />
                                    </svg>
                            </Link>
                            <Carousel 
                                count={Math.ceil(popularCars.length/3)}
                                page={currentPage}
                                setPage={setCurrentPage}
                                setAnimation={setCardAnimation}/>
                        </div>
                        <div className={classNames(styles.models_list, 
                            cardAnimation === 'previous' ? 
                            styles.swipe_right : styles.swipe_left)}
                            >
                            {popularCars.length > 0 ?
                            popularCars.map((car, index) => {
                                if((index >= (currentPage * 3) - 3) 
                                    && index < (currentPage * 3)) {
                                        return <ModelCard 
                                                    key={car.id} 
                                                    car={car}/>
                                }
                            }) : <ModelCard key={0} car={{}}/>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PopularPage;