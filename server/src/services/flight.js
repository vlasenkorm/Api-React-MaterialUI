const db = require("../dbModels");
const Flight = db.flight;

const createFlight = (reqInfo) => {
    const flight = new Flight({
        id: reqInfo.id,
        flightCode: reqInfo.flightCode,
        flightProvider: reqInfo.flightProvider,
        sourcePortName: reqInfo.sourcePortName,
        sourcePortCode: reqInfo.sourcePortCode,
        destinationPortName: reqInfo.destinationPortName,
        destinationPortCode: reqInfo.destinationPortCode,
        scheduledArrival: reqInfo.scheduledArrival ? reqInfo.scheduledArrival : Date.now(),
        scheduledDeparture: reqInfo.scheduledDeparture ? reqInfo.scheduledDeparture : Date.now(),
        status: reqInfo.status
  });
  
    return flight.save(flight)	
}

const listFlight = () => {
    return Flight.find({})
}

const findFlightByID = (id) => {
    return Flight.findById(id)
}

const updateFlight = (id, requestBody) => {
    return Flight.findByIdAndUpdate(id, requestBody, { useFindAndModify: false })
}

const destroyFlight = (id) => {
    return Flight.findByIdAndRemove(id, { useFindAndModify: false })
}

module.exports =  {createFlight, listFlight, findFlightByID, updateFlight,  destroyFlight}
