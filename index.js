// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return (drivers.slice(0,2))
}
const returnLastTwoDrivers= function(drivers){
    return (drivers.slice(-2))
}
const createFareMultiplier= function(numberOfTickets){
    return function(fare){
    return numberOfTickets * fare
}
}
const fareDoubler= createFareMultiplier(2)

const fareTripler= createFareMultiplier(3)

const selectDifferentDrivers= function(drivers){
    return drivers.slice(-2)
}