import Image from 'next/image';
import styles from './AppBlock.module.scss'

const AppBlock = () => {
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
                                <Image src="/images/app_links/apple-app-store.svg" alt="Download from app store" fill sizes='100%' />
                            </a>
                            <a href='#' className={styles.link}>
                                <Image src="/images/app_links/google-play-store.svg" alt="Download from google play" fill sizes='100%' />
                            </a>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image src="/images/carrent_app.webp" alt="Application preview" srcSet="/images/carrent_app.png" height='450' width='460' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppBlock;