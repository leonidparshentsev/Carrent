import styles from './SearchPage.module.scss'
import DateInput from '../UI/DateInput/DateInput';
import Button from '../UI/Button/Button';
import SearchAnimation from '../UI/SearchAnimation/SearchAnimation';
import LocationInput from '../UI/LocationInput/LocationInput';
import useSearchInputs from '@/hooks/useSearchInputs';
import useLoader from '@/hooks/useLoader';

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

    const [isLoading, showLoader] = useLoader();

    return (
        <section className={styles.search}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.inputs}>
                        <LocationInput label='Pick up location' 
                            placeholder='Pick up location'
                            initialLocation={localPickUpLocation}
                            changeLocation={setLocalPickUpLocation}
                            />
                        <DateInput label='PICK UP TIME'
                            initialDate={localPickUpTime}
                            changeDate={setLocalPickUpTime}
                            />
                        <LocationInput label='Return location' 
                            placeholder='Return location'
                            initialLocation={localDropOffLocation}
                            changeLocation={setLocalDropOffLocation}
                            />
                        <DateInput label='DROP OFF TIME'
                            initialDate={localDropOffTime}
                            changeDate={setLocalDropOffTime} 
                            />
                    </div>
                    <div className={styles.button}>
                        <Button green 
                            onClick={() => {
                                changeGlobalState();
                                showLoader();
                            }}>Search</Button>
                    </div>
                </div>
            </div>
            {isLoading && <SearchAnimation/>}
        </section>
    );
};

export default SearchPage;