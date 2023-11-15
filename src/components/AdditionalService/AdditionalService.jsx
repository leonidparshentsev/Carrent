import React from 'react';
import styles from './AdditionalService.module.scss'

const serviceStates = {
    crash: ['/images/svg/safety.svg', 'Crash Protection (CDW)', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quasi eos dolorum? Soluta, ipsam nesciunt?', ''],
    theft: ['/images/svg/safety.svg', 'Theft Protection (TP)', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', ''],
    personal: ['/images/svg/safety.svg', 'Personal Protection (PI)', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quasi eos dolorum? Soluta, ipsam nesciunt?', 12],
}

const AdditionalService = ({serviceName, setAdditionalCost}) => {
    const [src, title, info, additionalCost] = serviceStates[serviceName];

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
                    {additionalCost === ''
                    ? 
                    'Included' 
                    : 
                    <>
                        <span>$ {additionalCost}</span>
                        <input type='checkbox' onChange={(e) => {
                            if(e.target.checked) {
                                setAdditionalCost(state => state + additionalCost);
                            } else {
                                setAdditionalCost(state => state - additionalCost);
                            }
                        }}/>
                    </>
                    }
                </p>
            </div>
        </div>
    );
};


export default AdditionalService;