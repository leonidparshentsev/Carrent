import React from 'react';
import styles from './AppPage.module.scss'

const AppPage = () => {
    return (
        <section className={styles.app}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.app__promote}>
                        <h2 className={styles.app__title}>
                            Everything you need is Carrent app!
                        </h2>
                        <p className={styles.app__text}>
                            Download the app, and get your own discount for first order!
                        </p>
                        <div className={styles.app__links}>
                            <a href='#' className={styles.link}>
                                <img src="/images/app_links/apple-app-store.svg" alt="" />
                            </a>
                            <a href='#' className={styles.link}>
                                <img src="/images/app_links/google-play-store.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src="/images/carrent_app.webp" alt="Application preview" srcSet="/images/carrent_app.png" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPage;