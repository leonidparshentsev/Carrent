"use client"
import React, { useState } from 'react';
import styles from './CarListPage.module.scss'
import CarPreview from '../CarPreview/CarPreview';
import Pagination from '../UI/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import useScrollTo from '@/hooks/useScrollTo';
import { setPrice, setSeats, setTransmission, setDefaultSelect } from '@/reducer/selectSlice';
import { filterByPrice, filterBySeats, filterByTransmission, setInitialCars } from '@/reducer/carsSlice';

const CarListPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    
    const carsList = useSelector(state => state.cars);
    const selectState = useSelector(state => state.select);
    const dispatch = useDispatch();
    
    const [ref, scrollToRef] = useScrollTo();

    return (
        <section className={styles.car_list} ref={ref}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Choose your vehicle</h2>
                        <div className={styles.filters}>
                            <p className={styles.available}>{carsList.length} available</p>
                            <select 
                                value={selectState.price}
                                className={styles.select}
                                onChange={(e) => {
                                    dispatch(setPrice(e.target.value));
                                    dispatch(filterByPrice(e.target.value));
                                }}
                                >
                                <option value="default" disabled>Price</option>
                                <option value="low">Lower price</option>
                                <option value="high">Higher price</option>
                            </select>
                            <select 
                                value={selectState.seats}
                                className={styles.select}
                                onChange={(e) => {
                                    dispatch(setSeats(e.target.value));
                                    dispatch(filterBySeats({value: e.target.value, selectState}));
                                }}
                                >
                                <option value="default" disabled>Seats</option>
                                <option value="4">4 seats</option>
                                <option value="4+">4+ seats</option>
                            </select>
                            <select 
                                value={selectState.transmission}
                                className={styles.select}
                                onChange={(e) => {
                                    dispatch(setTransmission(e.target.value));
                                    dispatch(filterByTransmission({value: e.target.value, selectState}));
                                }}
                                >
                                <option value="default" disabled>
                                    Transmission
                                </option>
                                <option value="auto">Auto</option>
                                <option value="manual">Manual</option>
                            </select>
                            <button className={styles.clear}
                                onClick={() => {
                                    dispatch(setDefaultSelect());
                                    dispatch(setInitialCars())
                                }}
                            >Clear</button>
                        </div>
                    </div>
                    <div className={styles.main}>
                        {carsList?.map((car, index) => {
                            if(index >= ((currentPage * 5) - 5) 
                                && index < ((currentPage * 5))) {
                                    return <CarPreview key={car.id} car={car}/>
                            }
                        }
                        )}
                    </div>
                    <Pagination 
                        count={Math.ceil(carsList.length/5)}
                        currentPage={currentPage}
                        setCurrentPage={(page) => {
                            setCurrentPage(page);
                            scrollToRef();
                        }}/>
                </div>
            </div>
        </section>
    );
};


export default CarListPage;