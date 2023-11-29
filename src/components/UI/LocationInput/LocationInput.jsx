import styles from './LocationInput.module.scss'
import classNames from 'classnames';
import data from '../../../../public/DB.json'

const LocationInput = ({placeholder, 
                label, 
                border,
                invalid,
                initialLocation,
                changeLocation,
    }) => {

    const locationInputClass = classNames(
        styles.input__location,
        styles.input,
        border && styles.border,
        invalid && styles.border_invalid,
    );
    
    return (
        <div className={styles.container}>
            <h6 className={styles.title}>{label}</h6>
            <input
                type="text"
                autoComplete='false'
                className={locationInputClass}
                value={initialLocation}
                onChange={(e) => changeLocation(e.target.value)}
                placeholder={placeholder} 
            />
            <div className={styles.input__dropdown}>
                {data.locations
                    .filter( location => {
                        let input = initialLocation.toLowerCase();
                        let current = location.toLowerCase();

                        return (
                            input &&
                            current.startsWith(input) &&
                            input !== current
                        )
                    })
                    .map( (location, index) => (
                        <div key={index}
                            tabIndex={0}
                            className={styles.dropdown__content}
                            onClick={() => changeLocation(location)}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter') {
                                    changeLocation(location);
                                }
                            }}>
                            {location}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LocationInput;