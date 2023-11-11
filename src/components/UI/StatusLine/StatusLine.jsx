import React from 'react';
import styles from './StatusLine.module.scss'
import classNames from 'classnames';

const StatusLine = ({status}) => {

    const circleStyle = {
        default: classNames(styles.circle),
        active: classNames(styles.circle, styles.active),
        done: classNames(styles.circle, styles.done)
    }

    const conditionStyle = (status === 'condition') ? 
        circleStyle.active : circleStyle.done;

    const firstLineStyle = (status !== 'condition') && styles.active;

    const driverStyle = (status === 'condition') 
        && circleStyle.default 
        || (status === 'driver') && circleStyle.active 
        || (status === 'payment') && circleStyle.done;

    const seconLineStyle = (status === 'payment') && styles.active;

    const paymenStyle = status === 'payment' ? 
        circleStyle.active : circleStyle.default;

    return (
        <div className={styles.container}>
            <div className={styles.status_point}>
                <div className={conditionStyle}>
                    <div className={styles.circle__inner}></div>
                </div>
                <p className={styles.text}>Rental condition</p>
            </div>

            <div className={classNames(styles.line, firstLineStyle)}></div>

            <div className={styles.status_point}>
                <div className={driverStyle}>
                    <div className={styles.circle__inner}></div>
                </div>
                <p className={styles.text}>Driver details</p>
            </div>

            <div className={classNames(styles.line, seconLineStyle)}></div>

            <div className={styles.status_point}>
                <div className={paymenStyle}>
                    <div className={styles.circle__inner}></div>
                </div>
                <p className={styles.text}>Payment</p>
            </div>
        </div>
    );
};

export default StatusLine;