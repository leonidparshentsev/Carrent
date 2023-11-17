// import React, { useState } from 'react';
import styles from './Input.module.scss'
import classNames from 'classnames';
import useDate from '@/hooks/useDate';

const Input = ({placeholder, 
                label, 
                time, 
                border,
                invalid, 
                initialDate,
                changeDate, 
                initialLocation,
                changeLocation,
    }) => {

    const {dateInput,
            setDateInput,
            timeInput,
            setTimeInputHandler} = useDate(initialDate);

    const onDateChangeHandler = (e) => {
        let currentDate = `${e.target.value}T${timeInput}`;
        setDateInput(e.target.value);
        changeDate(new Date(currentDate).getTime());
    }

    const onTimeChangeHandler = (e) => {
        let currentDate = `${dateInput}T${e.target.value}`;
        setTimeInputHandler(e.target.value);
        changeDate(new Date(currentDate).getTime());
    }

    const locationInputClass = classNames(
        styles.input__location,
        styles.input,
        border && styles.border,
        invalid && styles.border_invalid,
    );

    const dateInputClass = classNames(
        styles.inputs__date, 
        styles.input, 
        border && styles.border,
        invalid && styles.border_invalid,
    );

    const timeInputClass = classNames(
        styles.inputs__time, 
        styles.input, 
        border && styles.border,
        invalid && styles.border_invalid,
    );
    
    return (
        <>
            {time ?
            (<div className={styles.container}> 
                <h6 className={styles.title}>{label}</h6>
                <div className={styles.inputs}>
                    <input
                        type="date"
                        value={dateInput}
                        onChange={onDateChangeHandler}
                        className={dateInputClass}
                        />
                    <input
                        type="time"
                        value={timeInput}
                        onChange={onTimeChangeHandler}
                        className={timeInputClass}
                        />
                </div>
            </div>
            )
            : (
            <div className={styles.container}>
                <h6 className={styles.title}>{label}</h6>
                <input
                    type="text"
                    autoComplete='false'
                    value={initialLocation}
                    onChange={(e) => changeLocation(e.target.value)}
                    className={locationInputClass}
                    placeholder={placeholder}/>
            </div>
            )}
        </>
    );
};

export default Input;