import Image from 'next/image';
import styles from './ServicesBlock.module.scss'

const ServicesBlock = ({imageSide, content}) => {
    return (
        <div className={styles.services_block}>
            {imageSide === 'left' && (
                <div className={styles.services_block__img}>
                    <Image src={content.img} alt="Services image" fill sizes='100%'/>
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
                    <Image src={content.img} alt="Services image" fill sizes='100%'/>
                </div>
            )}
        </div>
    );
};

export default ServicesBlock;