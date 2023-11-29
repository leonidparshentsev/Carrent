import { convertToDate, convertToTime } from '@/utils/convertTimestamp';
import { useEffect, useState } from 'react';

const useDate = (initialDate) => {

    const setTimeInputHandler = (time) => {
        let [hours, minutes] = time.split(':');
        if(+minutes < 15 || +minutes >= 45) minutes = '00';
        else if(+minutes < 45) minutes = '30';

        setTimeInput(`${hours}:${minutes}`);
    };

    const [dateInput, setDateInput] = useState(convertToDate(initialDate));
    const [timeInput, setTimeInput] = useState(convertToTime(initialDate));


    useEffect(() => {
        setDateInput(convertToDate(initialDate));
        setTimeInput(convertToTime(initialDate));
    }, [initialDate]);

    return {dateInput,
            setDateInput,
            timeInput,
            setTimeInputHandler};
};

export default useDate;