'use client'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss'
import Button from '../UI/Button/Button';
import SignIn from '../SignIn/SignIn';

const Header = () => {

    const userAccountState = useSelector(state => state.userAccount);
    const [signInPopup, setSignInPopup] = useState(false);
    const router = useRouter();

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
                    {!userAccountState.isAuthorized ?
                        <Button onClick={() => setSignInPopup(true)}>Sign in</Button>
                    :
                        <div className={styles.account_preview}
                            onClick={() => router.push('/user')}
                            >
                            <div className={styles.account__image}>
                                <img src="/images/comments/user.png" alt=""/>
                            </div>
                            <p className={styles.account__name}>
                                {`${userAccountState.userName} ${userAccountState.userSurname}`}
                            </p>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.promote}>
                <p className={styles.promote__title}>
                    Use our app to get <Link href='/#getapp'><span>10% discount</span></Link> on your first order
                </p>
            </div>
            {signInPopup && <SignIn hide={() => setSignInPopup(false)}/>}
        </header>
    );
};

export default Header;