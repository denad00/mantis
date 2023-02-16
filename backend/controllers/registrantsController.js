const Registrants = require("../models/registrantsModel")

//create a new registration
const createRegistrant = async (req, res) => {
    const {firstName, lastName, phoneNumber, age, country} = req.body

    //adding document to database
    try {
        const registrant = await Registrants.create({firstName, lastName, phoneNumber, age, country})
        res.status(201).json({
            id: registrant._id,
            FirstName: registrant.firstName,
            LastName: registrant.lastName,
            RegisteredAt: registrant.createdAt
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {createRegistrant}