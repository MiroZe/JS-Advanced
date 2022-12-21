function timeToWalk(steps,footprint,speed) { 

    let distanceInMeters = steps * footprint // 2400 mt
    let speedInMtPerSec = speed / 3.60; //
    let additionalMin = Math.floor(distanceInMeters /500);
    
    
    
    let totalTimeInSeconds = (distanceInMeters / speedInMtPerSec) + additionalMin * 60;
    
    
    
    let min = Math.floor(totalTimeInSeconds / 60);
    let sec = Math.round(totalTimeInSeconds - min * 60);
    let hrs = Math.floor(totalTimeInSeconds / 3600);
    let output =''
    
    let hrsOutput = (hrs < 10 ? '0' : '') + hrs;
    let minOutput = (min < 10 ? '0' : '') + min;
    let secOutput = (sec < 10 ? '0' : '') + sec;
    console.log(`${hrsOutput}:${minOutput}:${secOutput}`);
    
    }
    timeToWalk(4000, 0.60, 5)