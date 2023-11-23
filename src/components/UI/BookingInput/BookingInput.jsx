import React from 'react';
import styles from './BookingInput.module.scss'
import classNames from 'classnames';

const BookingInput = ({label, type, value, setValue, invalid}) => {
    return (
        <label className={styles.label}>
            <span>{label}</span>
            <input 
                className={classNames(styles.input, invalid && styles.input_invalid)} 
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </label>
    );
};

export default BookingInput;