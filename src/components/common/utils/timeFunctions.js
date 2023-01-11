function longDate(inputDate) {
    let date, month, year;
  
    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();
  
    date = date
        .toString()
        .padStart(2, '0');

    month = month
        .toString()
        .padStart(2, '0');
  
    return `${date}/${month}/${year}`;
}

function writtenDate(inputDate) {
    let date, month, year;

    date = inputDate.getDate();
    date = date
        .toString()
        .padStart(2, '0');

    month = inputDate.toLocaleString('en-us', {month:'long'});
    year = inputDate.getFullYear();

    return `${month} ${date}, ${year}`;
}

function daysSince(inputDate) {
    let today, difference, totalDays;

    today = new Date();

    difference = today.getTime() - inputDate.getTime()
    totalDays = Math.ceil(difference / (1000 * 3600 * 24))
    
    if (totalDays > 0) {
        return `${totalDays} d`;
    } else {return `Today`}

}

export {longDate, writtenDate, daysSince}