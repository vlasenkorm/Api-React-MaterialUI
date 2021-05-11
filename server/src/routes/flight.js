const { Router } = require('express')
const { createFlight, listFlight, findFlight, updateFlight, deleteFlight} = require('../handlers/flight')
const { withCatch } = require('../utils/util')
const router = Router()

//'/api/v1/flight'
router.get('/',  withCatch(listFlight))
router.post('/',  withCatch(createFlight))
router.get('/:id',  withCatch(findFlight))
router.put('/:id',  withCatch(updateFlight))
router.delete('/:id',  withCatch(deleteFlight))

module.exports = router