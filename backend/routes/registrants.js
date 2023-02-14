const express = require('express')
const {createRegistrant} = require('../controllers/registrantsController')

const router = express.Router()

//POST a new registrant
router.post('/', createRegistrant)

module.exports = router