import React from 'react';
import styles from './BookingInput.module.scss'

const BookingInput = ({label, type}) => {
    return (
        <label className={styles.label}>
            <span>{label}</span>
            <input className={styles.input} type={type} />
        </label>
    );
};

export default BookingInput;