const boom = require("boom")

const Car = require("../models/Car")

// Get all Cars
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find()
        console.log("hey")
        return cars
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get Single Car by ID
exports.getSingleCar = async (req, res) => {
    try {
        const id = req.params.id
        const car = await Car.findById(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new Car
exports.addCar = async (req, res) => {
    try {
        const car = new Car(req.body)
        return car.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing Car
exports.updateCar = async (req, res) => {
    try {
        const id = req.params.id
        const car = req.body
        const { ...updateData } = car
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true})
        return
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a Car
exports.deleteCar = async (req, res) => {
    try {
        const id = req.params.id
        const car = await Car.findByIdAndRemove(id)
    } catch (err) {
        throw boom.boomify(err)
    }
}