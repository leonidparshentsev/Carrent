import styles from './About.module.scss'
import GrayBlock from '../UI/GrayBlock/GrayBlock';
import ServicesBlock from '../ServicesBlock/ServicesBlock';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.main__title}>
                        Join our team
                    </h2>
                    <div className={styles.benefits}>
                        <div className={styles.benefits__container}>
                            <GrayBlock>
                                <h4 className={styles.title}>+120 %</h4>
                                <p className={styles.text}>trips over the past year</p>
                            </GrayBlock>
                            <GrayBlock>
                                <h4 className={styles.title}>100+</h4>
                                <p className={styles.text}>cars in the fleet</p>
                            </GrayBlock>
                            <GrayBlock>
                                <h4 className={styles.title}>More than 50+</h4>
                                <p className={styles.text}>employee</p>
                            </GrayBlock>
                        </div>
                    </div>
                    <ServicesBlock imageSide='right' content={content[0]}/>
                    <ServicesBlock imageSide='left' content={content[1]}/>
                    <ServicesBlock imageSide='right' content={content[2]}/>
                </div>
            </div>
        </section>
    );
};

const content = [
    {
        title: 'Join our team',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae aspernatur qui et voluptatibus sint similique laudantium repellendus ea perspiciatis ut expedita maxime laboriosam maiores unde explicabo vero sit libero, nulla pariatur quae consequuntur?',
        img: '/images/svg/team.svg',
    },
    {
        title: 'Make your career',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae aspernatur qui et voluptatibus sint similique laudantium repellendus ea perspiciatis ut expedita maxime laboriosam maiores unde explicabo vero sit libero.',
        img: '/images/svg/work.svg',
    },
    {
        title: 'Grow with us',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae aspernatur qui et voluptatibus sint similique laudantium repellendus ea perspiciatis ut expedita maxime laboriosam maiores unde explicabo vero sit libero.',
        img: '/images/svg/grow.svg',
    },
];

export default About;