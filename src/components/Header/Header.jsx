'use client'
import React, { useState } from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';
import Button from '../UI/Button/Button';
import SignIn from '../SignIn/SignIn';

const Header = () => {

    const [signPopup, setSignPopup] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link href="/" className={styles.logo}>
                        Car<span>rent</span>
                    </Link>
                    <nav className={styles.nav}>
                        <ul className={styles.nav__list}>
                            <li className={styles.nav__item}>
                                <Link href="/cars">Transport</Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href="/services">Services</Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link href='/about'>About Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href='/#getapp'>
                        <Button green style={{marginRight: 15}}>Get app</Button>
                    </Link>
                    <Button onClick={() => setSignPopup(true)}>Sign in</Button>
                </div>
            </div>
            <div className={styles.promote}>
                <p className={styles.promote__title}>
                    Use our app to get <Link href='/#getapp'><span>10% discount</span></Link> on your first order
                </p>
            </div>
            {signPopup && <SignIn hide={() => setSignPopup(false)}/>}
        </header>
    );
};

export default Header;