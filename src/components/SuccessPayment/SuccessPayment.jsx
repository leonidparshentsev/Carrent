import React from 'react';
import styles from './SuccessPayment.module.scss'
import Button from '../UI/Button/Button';
import { useRouter } from 'next/navigation';

const SuccessPayment = () => {

    const router = useRouter();

    return (
        <div className={styles.success_page}>
            <h2 className={styles.main_title}>Transaction successful</h2>
            <div className={styles.animation}>
                <div className={styles.circle}>
                    <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="80" height="80" viewBox="0 0 210 210">

                        <circle className={styles.svg__circle} transform="rotate(-90 105 105)" cx="105" cy="105" r="100" />
                    </svg>
                </div>
                <svg className={styles.svg_check_mark} fill="#000000" width="42px" height="42px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z" fillRule="evenodd" />
                </svg>
            </div>
            <Button green 
                onClick={() => router.push('/')}>View main page</Button>
        </div>
    );
};

export default SuccessPayment;