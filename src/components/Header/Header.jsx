import React from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';
import Button from '../UI/Button/Button';

const Header = () => {
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
                            <li className={styles.nav__item}>About Us</li>
                        </ul>
                    </nav>
                    <Link href='/#getapp'>
                        <Button green style={{marginRight: 15}}>Get app</Button>
                    </Link>
                    <Button>Sign in</Button>
                </div>
            </div>
            <div className={styles.promote}>
                <p className={styles.promote__title}>
                    Use our app to get <Link href='/#getapp'><span>10% discount</span></Link> on your first order
                </p>
            </div>
        </header>
    );
};

export default Header;