import React from 'react';
import styles from './SearchPage.module.scss'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const SearchPage = () => {
    return (
        <section className={styles.search}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.inputs}>
                        <Input label='Pick up location' 
                            placeholder='Pick up location'/>
                        <Input label='PICK UP TIME' time/>
                        <Input label='Return loaction' 
                            placeholder='Return loaction'/>
                        <Input label='DROP OFF TIME' time/>
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