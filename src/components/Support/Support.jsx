import React from 'react';
import styles from './Support.module.scss'

const Support = () => {
    return (
        <section className={styles.support}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.content__top}>
                        <div className={styles.top__left}>
                            <h2 className={styles.main__title}>
                                Do you need help?<br />
                                Contact us!
                            </h2>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero cupiditate <span>quo exercitationem quae</span>. Aliquid ut, earum soluta sit voluptates, <span>aliquam cumque deleniti odio</span>  facilis perspiciatis eos iste quasi esse.
                            </p>
                            <div className={styles.numbers}>
                                <div className={styles.number}>
                                    <a href='tel:+79992223223' className={styles.tel}>+7 (999) 222-32-23</a>
                                    <p className={styles.city}>Moscow</p>
                                </div>
                                <div className={styles.number}>
                                    <a href='tel:+78882223223' className={styles.tel}>+7 (888) 222-32-23</a>
                                    <p className={styles.city}>Saint-Petersburg</p>
                                </div>
                                <div className={styles.number}>
                                    <a href='tel:+77772223223' className={styles.tel}>+7 (777) 222-32-23</a>
                                    <p className={styles.city}>Sochi</p>
                                </div>
                            </div> 
                        </div>
                        <div className={styles.top__right}>
                            <img src="/images/svg/help.svg" alt="Call manager"/>
                        </div>
                    </div>
                    <div className={styles.content__bottom}>
                        <div className={styles.rickroll__img}>
                            <img src="/images/Rickrolling_QR_code.png" alt="qr-code" />
                        </div>
                        <h4 className={styles.rickroll__title}>
                            You can scan QR-code to contact
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;