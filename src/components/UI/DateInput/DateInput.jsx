import styles from './DateInput.module.scss'
import classNames from 'classnames';
import useDate from '@/hooks/useDate';

const DateInput = ({ label, 
                border,
                invalid, 
                initialDate,
                changeDate }) => {

    const {dateInput,
            setDateInput,
            timeInput,
            setTimeInputHandler} = useDate(initialDate);

    const onDateChangeHandler = (e) => {
        let currentDate = `${e.target.value}T${timeInput}`;
        setDateInput(e.target.value);
        changeDate(new Date(currentDate).getTime());
    }

    const onTimeChangeHandler = (e) => {
        let currentDate = `${dateInput}T${e.target.value}`;
        setTimeInputHandler(e.target.value);
        changeDate(new Date(currentDate).getTime());
    }

    const dateInputClass = classNames(
        styles.inputs__date, 
        styles.input, 
        border && styles.border,
        invalid && styles.border_invalid,
    );

    const timeInputClass = classNames(
        styles.inputs__time, 
        styles.input, 
        border && styles.border,
        invalid && styles.border_invalid,
    );
    
    return (
        <div className={styles.container}>
            <h6 className={styles.title}>{label}</h6>
            <div className={styles.inputs}>
                <input
                    type="date"
                    value={dateInput}
                    onChange={onDateChangeHandler}
                    className={dateInputClass}
                />
                <input
                    type="time"
                    value={timeInput}
                    onChange={onTimeChangeHandler}
                    className={timeInputClass}
                />
            </div>
        </div>
    );
};

export default DateInput;