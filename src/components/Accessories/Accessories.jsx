import React from 'react';
import styles from './Accessories.module.scss'
import Button from '../UI/Button/Button';

const Accessories = ({setCurrentStatus}) => {
    return (
        <div className={styles.accessories}>
            <h2 className={styles.main_title}>Select accessories</h2>
            <Button green 
                onClick={setCurrentStatus}
                style={{width: '100%'}}>Confirm</Button>
        </div>
    );
};

export default Accessories;