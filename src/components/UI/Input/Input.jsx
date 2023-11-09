import React from 'react';
import styles from './Input.module.scss'
import classNames from 'classnames';

const Input = ({placeholder, label, time}) => {

    return (
        <>
            {time ?
            (<div className={styles.container}> 
                <h6 className={styles.title}>{label}</h6>
                <div className={styles.inputs}>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className={classNames(styles.inputs__date, styles.input)}
                        placeholder='01.01.2023' />
                    <input
                        type="time"
                        name="time"
                        id="time"
                        className={classNames(styles.inputs__time, styles.input)}
                        placeholder='12:00' />
                </div>
            </div>
            )
            : (
            <div className={styles.container}>
                <h6 className={styles.title}>{label}</h6>
                <input
                    type="text"
                    name="location"
                    id="location"
                    className={classNames(styles.input__location,styles.input)}
                    placeholder={placeholder}/>
            </div>
            )}
        </>
    );
};

export default Input;