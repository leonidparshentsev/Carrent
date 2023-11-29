import styles from './RentalCondition.module.scss'
import Button from '../UI/Button/Button';
import DateInput from '../UI/DateInput/DateInput';
import SearchAnimation from '../UI/SearchAnimation/SearchAnimation';
import LocationInput from '../UI/LocationInput/LocationInput';
import useSearchInputs from '@/hooks/useSearchInputs';
import useLoader from '@/hooks/useLoader';

const RentalCondition = ({car, isInputIncorrect}) => {

    const { localPickUpLocation,
        localDropOffLocation,
        localPickUpTime,
        localDropOffTime,
        setLocalPickUpLocation,
        setLocalDropOffLocation,
        setLocalPickUpTime,
        setLocalDropOffTime,
        changeGlobalState } = useSearchInputs();

    const [isLoading, showLoader] = useLoader();

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
                <LocationInput border 
                    invalid={isInputIncorrect && !localPickUpLocation}
                    label='Pick up location' 
                    placeholder='Pick up location'
                    initialLocation={localPickUpLocation}
                    changeLocation={setLocalPickUpLocation}
                    />
                <DateInput border 
                    invalid={isInputIncorrect && !localPickUpTime}
                    label='PICK UP TIME'
                    initialDate={localPickUpTime}
                    changeDate={setLocalPickUpTime}
                    />
                <LocationInput border
                    invalid={isInputIncorrect && !localDropOffLocation}
                    label='Return location' 
                    placeholder='Return location'
                    initialLocation={localDropOffLocation}
                    changeLocation={setLocalDropOffLocation}
                    />
                <DateInput border
                    invalid={isInputIncorrect && !localDropOffTime} 
                    label='DROP OFF TIME'
                    initialDate={localDropOffTime}
                    changeDate={setLocalDropOffTime} 
                    />
                {
                    isInputIncorrect && (
                        <p className={styles.invalid_message}>
                            It is necessary to fill in all fields
                        </p>
                    )
                }
            </div>
            <Button green
                onClick={() => {
                    changeGlobalState();
                    showLoader();
                }}
                style={{width: '100%'}}>Update</Button>
            {isLoading && <SearchAnimation/>}
        </div>
    );
};

export default RentalCondition;