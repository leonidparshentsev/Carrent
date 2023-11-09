"use client"
import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Carousel.module.scss'

const Carousel = ({count, vertical, page, setPage}) => {

    const flipLeft = () => {
        if(page > 1) setPage(p => p - 1);
    }

    const flipRight = () => {
        if(page < count) setPage(p => p + 1);
    }

    return (
        <div className={classNames(styles.carousel, vertical && styles.vertical)}>
            <div
                onClick={flipLeft} 
                className={classNames(styles.left_arrow, styles.arrow, (page !== 1 && styles.active))}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={styles.loading_line}>
            {Array(count).fill().map((_, index) => {
                return <div 
                    className={classNames(styles.loading_plate, (page === index + 1 && styles.active))}
                    key={index + 1}></div>
            })}
            </div>
            <div
                onClick={flipRight} 
                className={classNames(styles.right_arrow, styles.arrow,  (page !== count && styles.active))}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Carousel;