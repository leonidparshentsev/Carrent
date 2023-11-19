import React from 'react';
import styles from './ServicesBlock.module.scss'

const ServicesBlock = ({imageSide, content}) => {
    return (
        <div className={styles.services_block}>
            {imageSide === 'left' && (
                <div className={styles.services_block__img}>
                    <img src={content.img} alt="Services image" />
                </div>
            )}
            <div className={styles.services_block__text}>
                <h3 className={styles.title}>
                    {content.title}
                </h3>
                <p className={styles.text}>
                    {content.text}
                </p>
            </div>
            {imageSide === 'right' && (
                <div className={styles.services_block__img}>
                    <img src={content.img} alt="Services image" />
                </div>
            )}
        </div>
    );
};

export default ServicesBlock;