import React from 'react';
import styles from './SearchPage.module.scss'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import useSearchInputs from '@/hooks/useSearchInputs';

const SearchPage = () => {

    const { localPickUpLocation,
        localDropOffLocation,
        localPickUpTime,
        localDropOffTime,
        setLocalPickUpLocation, 
        setLocalDropOffLocation, 
        setLocalPickUpTime, 
        setLocalDropOffTime,
        changeGlobalState } = useSearchInputs();

    return (
        <section className={styles.search}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.inputs}>
                        <Input label='Pick up location' 
                            placeholder='Pick up location'
                            initialLocation={localPickUpLocation}
                            changeLocation={setLocalPickUpLocation}
                            />
                        <Input label='PICK UP TIME' time
                            initialDate={localPickUpTime}
                            changeDate={setLocalPickUpTime}
                            />
                        <Input label='Return location' 
                            placeholder='Return location'
                            initialLocation={localDropOffLocation}
                            changeLocation={setLocalDropOffLocation}
                            />
                        <Input label='DROP OFF TIME' time
                            initialDate={localDropOffTime}
                            changeDate={setLocalDropOffTime} 
                            />
                    </div>
                    <div className={styles.button}>
                        <Button green onClick={changeGlobalState}>Search</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchPage;