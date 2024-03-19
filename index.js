// Code your solution in this file!
const scuberHq = 42;
const blockLength = 264;
function distanceFromHqInBlocks(pickup) {
    if(pickup >= scuberHq) {
        return pickup - scuberHq;
    }
    else {
        return scuberHq - pickup;
    }

}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * blockLength;
}

function distanceTravelledInFeet(start, stop) {
    if(start > stop) {
        return (start-stop) * blockLength;
    }
    else {
        return (stop - start) * blockLength;
    }
}

function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);
    if(feetDistance <= 400) {
        return 0;
    }
    else if(feetDistance > 400 && feetDistance <= 2000){
        return (feetDistance-400) *0.02;
    }
    else if(feetDistance > 2500) {
        return 'cannot travel that far';
    }
    else {
        return 25;
    }
}