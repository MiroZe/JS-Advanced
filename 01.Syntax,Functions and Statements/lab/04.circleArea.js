function circleArea(input) {

let check = typeof input;

let area = 0;
if(check === 'number') {
area = Math.pow(input,2) * Math.PI;
console.log(area.toFixed(2));
} else {
    console.log(`We can not calculate the circle area, because we receive a ${check}.`);
}

}
circleArea(true)