import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.content}>
                    <h2 className={styles.footer__title}>
                        Your Payment Experience is<br/>
                        <span>Easy and Extremly Safe</span>
                    </h2>
                    <p className={styles.footer__text}>
                        There are no hidden charges or transactions fees for purchases made on our website. So you can rent easily.
                    </p>
                    <div className={styles.footer__images}></div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.content}>
                    <p className={styles.copyright}>Copyright 2023</p>
                    <p className={styles.copyright}>All rights reserved</p>
                    <ul className={styles.links__list}>
                        <li className={styles.links}>About us</li>
                        <li className={styles.links}>Reviews</li>
                        <li className={styles.links}>Support</li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;