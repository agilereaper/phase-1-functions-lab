const hq = 42 
function distanceFromHqInBlocks(someValue){
 let blocks = someValue - hq
 blocks = Math.abs(blocks)
    return blocks
}
function distanceFromHqInFeet(someValue) {
    let feet = (someValue - hq) * 264
    feet = Math.abs(feet)
    return feet
}
function distanceTravelledInFeet(start, end) {
    let walk = (start - end) * 264
    walk = Math.abs(walk)
    return walk
}
function calculatesFarePrice(start, end) {
    let feet = (start - end) * 264
   
    feet = Math.abs(feet)
   let fare = feet
   
   if (feet <= 400) {
    fare = feet * 0
    } else if (feet >= 400 && feet <=2000) {
        fare = (feet - 400) * .02
    } else if (feet >= 2000 && feet <= 2500) {
        fare = 25
    } else if (feet > 2500) {
        fare = 'cannot travel that far'
    }
return fare
}