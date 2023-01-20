function constuctionCrew(object) {

    if(object.dizziness === true) {
        object.levelOfHydrated += 0.1 * object.experience * object.weight;
        object.dizziness = false;
    }
    return object;

}
console.log(constuctionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  
  ))