function distanceFromHqInBlocks(currentLocation) {
    const headquartersLocation = 42;
    const distance = Math.abs(currentLocation - headquartersLocation);
    return distance;
}

function distanceFromHqInFeet(currentLocation){
    return distanceFromHqInBlocks(currentLocation) * 264
    
}

function distanceTravelledInFeet(start,destination){
    let distance =(destination-start) *264
    if (destination<start){
        distance = (start-destination)* 264
    }
        return distance
  }
    
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    } else {
      return 0;
    }
  }