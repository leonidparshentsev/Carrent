"use client"
import { useEffect, useState } from 'react';
import styles from './CarListPage.module.scss'
import CarPreview from '../CarPreview/CarPreview';
import Pagination from '../UI/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import useScrollTo from '@/hooks/useScrollTo';
import { setPrice, setSeats, setTransmission, setDefaultSelect } from '@/reducer/filterSlice';
import { filterByPrice, filterBySeats, filterByTransmission, setInitialCars, filterByType } from '@/reducer/carsSlice';
import { setType } from '@/reducer/orderSlice';

const CarListPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    
    const carsList = useSelector(state => state.cars);
    const filterState = useSelector(state => state.filter);
    const orderState = useSelector(state => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        if(orderState.carType !== '') {
            dispatch(filterByType(orderState.carType));
        }

        return () => { 
            dispatch(setType(''));
            dispatch(setInitialCars());
        };
    }, []);
    
    const [ref, scrollToRef] = useScrollTo();

    return (
        <section className={styles.car_list} 
            ref={ref}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Choose your vehicle</h2>
                        <div className={styles.filters}>
                            <p className={styles.available}>{carsList.length} available</p>
                            <select 
                                value={filterState.price}
                                className={styles.select}
                                onChange={(e) => {
                                    dispatch(setPrice(e.target.value));
                                    dispatch(filterByPrice(e.target.value));
                                    setCurrentPage(1);
                                }}
                                >
                                <option value="default" disabled>Price</option>
                                <option value="low">Lower price</option>
                                <option value="high">Higher price</option>
                            </select>
                            <select 
                                value={filterState.seats}
                                className={styles.select}
                                onChange={(e) => {
                                    dispatch(setSeats(e.target.value));
                                    dispatch(filterBySeats({...filterState, seats: e.target.value}));
                                    setCurrentPage(1);
                                }}
                                >
                                <option value="default" disabled>Seats</option>
                                <option value="4">4 seats</option>
                                <option value="4+">4+ seats</option>
                            </select>
                            <select 
                                value={filterState.transmission}
                                className={styles.select}
                                onChange={(e) => {
                                    dispatch(setTransmission(e.target.value));
                                    dispatch(filterByTransmission({...filterState, transmission: e.target.value}));
                                    setCurrentPage(1);
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
                                    dispatch(setInitialCars());
                                    setCurrentPage(1);
                                }}
                            >Clear</button>
                        </div>
                    </div>
                    <div className={styles.main}>
                        { 
                        carsList.length > 0 
                        ? 
                        carsList.map((car, index) => {
                            if(index >= ((currentPage * 5) - 5) 
                                && index < ((currentPage * 5))) {
                                    return <CarPreview key={car.id} car={car}/>
                            }
                        }) 
                        :
                        <p className={styles.no_car}>There are no suitable cars</p>
                        }
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