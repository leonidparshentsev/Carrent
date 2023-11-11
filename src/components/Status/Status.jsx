import React from 'react';
import styles from './Status.module.scss'
import StatusLine from '../UI/StatusLine/StatusLine';

const Status = ({status}) => {

    return (
        <section className={styles.status}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <StatusLine status={status}/>
                </div>
            </div>
        </section>
    );
};


export default Status;