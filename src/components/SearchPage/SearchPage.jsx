import React from 'react';
import styles from './SearchPage.module.scss'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
// import { useSelector } from 'react-redux';
import useInputs from '@/hooks/useInputs';

const SearchPage = () => {

    const [pickUpLoc,
            pickUpTime,
            returnLoc,
            dropOffTime,
            changePickUpLocHandler,
            changeReturnLocHandler,
            changePickUpTimeHandler,
            changeDropOffHandler] = useInputs();

    return (
        <section className={styles.search}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.inputs}>
                        <Input label='Pick up location' 
                            placeholder='Pick up location'
                            initialLoc={pickUpLoc}
                            changeLoc={changePickUpLocHandler}
                            />
                        <Input label='PICK UP TIME' time
                            initialDate={pickUpTime}
                            changeDate={changePickUpTimeHandler}/>
                        <Input label='Return location' 
                            placeholder='Return location'
                            initialLoc={returnLoc || pickUpLoc}
                            changeLoc={changeReturnLocHandler}
                            />
                        <Input label='DROP OFF TIME' time
                            initialDate={dropOffTime}
                            changeDate={changeDropOffHandler}/>
                    </div>
                    <div className={styles.button}>
                        <Button green>Search</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchPage;