function previousDay(year, month, day) {

    let d = new Date(year,month -1 ,day);

    d.setDate(d.getDate() - 1);
    console.log(`${d.getFullYear()}-${d.getMonth() +1 }-${d.getDate()}`);


}
previousDay(2016, 9, 30)