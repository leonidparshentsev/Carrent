import styles from './RentalCondition.module.scss'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import useSearchInputs from '@/hooks/useSearchInputs';

const RentalCondition = ({car}) => {

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
                    initialLocation={localPickUpLocation}
                    changeLocation={setLocalPickUpLocation}
                    />
                <Input border 
                    label='PICK UP TIME' time
                    initialDate={localPickUpTime}
                    changeDate={setLocalPickUpTime}
                    />
                <Input border
                    label='Return location' 
                    placeholder='Return location'
                    initialLocation={localDropOffLocation}
                    changeLocation={setLocalDropOffLocation}
                    />
                <Input border 
                    label='DROP OFF TIME' time
                    initialDate={localDropOffTime}
                    changeDate={setLocalDropOffTime} 
                    />
            </div>
            <Button green
                onClick={changeGlobalState}
                style={{width: '100%'}}>Update</Button>
        </div>
    );
};

export default RentalCondition;