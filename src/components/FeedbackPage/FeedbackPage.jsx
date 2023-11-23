import React, { useState } from 'react';
import styles from './FeedbackPage.module.scss'
import Carousel from '../UI/Carousel/Carousel';
import classNames from 'classnames';

const FeedbackPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [cardAnimation, setCardAnimation] = useState('previous');

    return (
        <section className={styles.feedback} id='feedback'>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.feedback__carousel}>
                        <Carousel count={4} vertical
                            page={currentPage}
                            setPage={setCurrentPage}
                            setAnimation={setCardAnimation}/>
                    </div>
                    <div className={classNames(styles.feedback__card, 
                        cardAnimation === 'previous' ? 
                        styles.swipe_down : styles.swipe_up )}>
                        <h2 className={styles.title}>
                            <span>Thousands of Happy People</span><br />
                            Using Our Product
                        </h2>
                        <div className={styles.profile} 
                            key={currentPage}>
                            <div className={styles.profile__photo}>
                                <img src={testimotionals[currentPage - 1].imageUrl} alt="Customer"/>
                            </div>
                            <div className={styles.profile__info}>
                                <div className={styles.info__name}>
                                {testimotionals[currentPage - 1].name}
                                </div>
                                <div className={styles.info__position}>
                                {testimotionals[currentPage - 1].position}
                                </div>
                            </div>
                        </div>
                        <p className={styles.text}
                            key={`${currentPage}-text`}
                            >
                                {testimotionals[currentPage - 1].feedback}
                        </p>
                    </div>
                    <div className={styles.image}>
                        <img src="./images/feedback.jpg" alt="Car photo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackPage;

const testimotionals = [
    {
        name: "Vin Diesel",
        position: "Family Lead",
        feedback: "The best cars I've ever driven. Remember, family is the main thing.",
        imageUrl: `./images/comments/Vin.jpg`
    },
    {
        name: "Alex Perfolk",
        position: "Senior 3D",
        feedback: "These cars are certainly not the 'hundredth cruzak', but I'm still delighted. I will use it myself and advise my friends.",
        imageUrl: `./images/comments/Alex.jpg`
    },
    {
        name: "Turkish",
        position: "The philosopher",
        feedback: "I was looking for a new van, but I came across this site. These cars have everything you need, wheels and steering wheel.",
        imageUrl: `./images/comments/Turkish.jpg`
    },
    {
        name: "Daniel",
        position: "Taxi driver",
        feedback: "Good prices, fresh cars, convenient application. Take these cars and you won't regret it. I, on the other hand, would take a Peugeot.",
        imageUrl: `./images/comments/Sami.jpg`
    },

]