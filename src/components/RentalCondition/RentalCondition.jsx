// import React, { useEffect, useState } from 'react';
import styles from './RentalCondition.module.scss'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import useInputs from '@/hooks/useInputs';

const RentalCondition = ({car}) => {
    
    const {pickUpLoc,
        pickUpTime,
        returnLoc,
        dropOffTime,
        changePickUpLocHandler,
        changeReturnLocHandler,
        changePickUpTimeHandler,
        changeDropOffHandler} = useInputs();

    return (
        <div className={styles.rental_condition}>
            <h2 className={styles.main_title}>
                {car?.model}
            </h2>
            <div className={styles.image}>
                <img 
                src={`/images/models/${car?.type}/${car?.model}.png`} 
                alt=""/>
            </div>
            <div className={styles.inputs}>
                <Input border 
                    label='Pick up location' 
                    placeholder='Pick up location'
                    initialLoc={pickUpLoc}
                    changeLoc={changePickUpLocHandler}/>
                <Input border 
                    label='PICK UP TIME' time
                    initialDate={pickUpTime}
                    changeDate={changePickUpTimeHandler}/>
                <Input border
                    label='Return location' 
                    placeholder='Return location'
                    initialLoc={returnLoc || pickUpLoc}
                    changeLoc={changeReturnLocHandler}/>
                <Input border 
                    label='DROP OFF TIME' time
                    initialDate={dropOffTime}
                    changeDate={changeDropOffHandler}/>
            </div>
            <Button green style={{width: '100%'}}>Update</Button>
        </div>
    );
};

export default RentalCondition;