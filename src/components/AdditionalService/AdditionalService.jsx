import React from 'react';
import styles from './AdditionalService.module.scss'

const serviceStates = {
    crash: ['/images/svg/safety.svg', 'Crash Protection (CDW)', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quasi eos dolorum? Soluta, ipsam nesciunt?', true],
    theft: ['/images/svg/safety.svg', 'Theft Protection (TP)', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', true],
    personal: ['/images/svg/safety.svg', 'Personal Protection (PI)', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quasi eos dolorum? Soluta, ipsam nesciunt?', false],
}

const AdditionalService = ({serviceName}) => {
    const [src, title, info, included] = serviceStates[serviceName];

    return (
        <div className={styles.additional_service}>
            <div className={styles.additional_service__img}>
                <img src={src} alt="" />
            </div>
            <div className={styles.additional_service__title}>
                <h4 className={styles.header_title}>
                    {title}
                </h4>
                <p className={styles.info}>
                    {info}
                </p>
            </div>
            <div className={styles.additional_service__status}>
                <p className={styles.text}>
                    {!included 
                    ? 
                    'Included' 
                    : 
                    <>
                        <span>$ 12</span>
                        <input type='checkbox'/>
                    </>
                    }
                </p>
            </div>
        </div>
    );
};


export default AdditionalService;