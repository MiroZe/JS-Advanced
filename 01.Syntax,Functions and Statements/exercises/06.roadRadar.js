function roadRadar(speed, area) {
  let speedRules = { motorway: 130, interstate: 90, city: 50, residential: 20 };

  if ( speed <= speedRules[area]) {
    console.log(`Driving ${speed} km/h in a ${speedRules[area]} zone`);
  } else {
    let difference = speed - speedRules[area];
    let status;
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference > 20 && difference <=40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedRules[area]} - ${status}`);

  }

}
roadRadar(21,
    'residential');
