function daysOfMonth(month, year) {

    const getDays = (year, month) => {
        return new Date(year, month,0).getDate();
    };

    const days = getDays(year, month); 
    
    return days;


}
daysOfMonth(2, 2013)