
export const convertToDate = (timestamp, split = '-') => {
    let year = new Date(timestamp).getFullYear();
    let month = new Date(timestamp).getMonth() + 1;
    let date = new Date(timestamp).getDate();

    if(date < 10) date = '0' + date;
    if(month < 10) month = '0' + month;

    return `${year}${split}${month}${split}${date}`;
};

export const convertToTime = (timestamp) => {
    let hours = new Date(timestamp).getHours();
    let minutes = new Date(timestamp).getMinutes();
    if(hours < 10) hours = '0' + hours;
    if(minutes < 15) minutes = '00';
    else if(minutes < 45) minutes = '30';
    else if(minutes >= 45) {
        minutes = '00';
    }

    return `${hours}:${minutes}`;
};