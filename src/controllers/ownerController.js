const boom = require("boom")

// Get Data Models
const Owner = require("../models/Owner")
const Car = require("../models/Car")

// Get all Owners
exports.getOwner = async () => {
    try {
        const owners = await Owner.find()
        return owners
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single Owner by ID
exports.getSingleOwner = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const owner = await Owner.findById(id)
        return owner
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single Owner`s cars
exports.getOwnersCars = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const cars = await Car.find({ owner_id: id })
        return cars
    } catch (err) {
        throw boom.boomify(err)
    }
}