import React, { useState } from 'react';
import styles from './Input.module.scss'
import classNames from 'classnames';
import useDate from '@/hooks/useDate';

const Input = ({placeholder, 
                label, 
                time, 
                border, 
                changeDate, 
                changeLoc,
                initialLoc,
                initialDate
    }) => {

    const [dateInput,
        setDateInput,
        timeInput,
        setTimeInput] = useDate(initialDate);
    const [locInput, setLocInput] = useState(initialLoc);

    const onDateChangeHandler = (e) => {
        let currentDate = `${e.target.value}T${timeInput}`;
        setDateInput(e.target.value);
        changeDate(currentDate);
    }

    const onTimeChangeHandler = (e) => {
        let currentDate = `${dateInput}T${e.target.value}`;
        setTimeInput(e.target.value);
        changeDate(currentDate);
    }

    const onLocChangeHandler = (e) => {
        setLocInput(e.target.value);
        changeLoc(e.target.value);
    }

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
                        className={classNames(styles.inputs__date, styles.input, border && styles.border)}
                        />
                    <input
                        type="time"
                        value={timeInput}
                        onChange={onTimeChangeHandler}
                        className={classNames(styles.inputs__time, styles.input, border && styles.border)}
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
                    value={locInput}
                    onChange={onLocChangeHandler}
                    className={classNames(styles.input__location,styles.input, border && styles.border)}
                    placeholder={placeholder}/>
            </div>
            )}
        </>
    );
};

export default Input;