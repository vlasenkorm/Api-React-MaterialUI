/* eslint-disable no-undef */
const flightSrv = require('../services/flight')

const createFlight = async (req, res) => {
    await flightSrv.createFlight(req.body)
    res.status(201).send()
}

const listFlight = async (req, res) => {
    
    const flight = await flightSrv.listFlight(req)
    res.status(200).send(flight)
}

const findFlight = async (req, res) => {
    if (!req.params.id) return res.status(400).send({ message: 'Invalid data'})
    
    const flight = await flightSrv.findFlightByID(req.params.id)
        
    if (!flight) return res.status(404).send({ message: 'Flight Not Found' })
    res.status(200).send(flight)   
}

const updateFlight = async (req, res) => {
    
    if (!req.params.id) return res.status(400).send({ message: 'Invalid data'})

    const flight = await noteSrv.findFlightByID(req.params.id)

    if (!flight) return res.status(404).send({ message: 'Flight Not Found' })

    await noteSrv.updateFlight( req.params.id, req.body )
    res.status(200).send(flight) 
}


const deleteFlight = async (req, res) => {

    if (!req.params.id) return res.status(400).send({ message: 'Invalid data'})

    const flight = await flightSrv.destroyFlight(req.params.id)

    if (!flight) return res.status(404).send({ message: 'Flight Not Found'})
    res.status(204).send()
}

module.exports = { createFlight, listFlight, findFlight,  updateFlight, deleteFlight}