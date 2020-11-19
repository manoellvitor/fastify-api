const boom = require("boom")

const Car = require("../models/Car")

// Get all Cars
exports.getCars = async () => {
    try {
        const cars = await Car.find()
        return cars
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get Single Car by ID
exports.getSingleCar = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const car = await Car.findById(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new Car
exports.addCar = async req => {
    try {
        const car = new Car(req)
        const newCar = await car.save()
        return newCar
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing Car
exports.updateCar = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const updateData = req.params === undefined ? req : req.params
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true})
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a Car
exports.deleteCar = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const car = await Car.findByIdAndRemove(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}