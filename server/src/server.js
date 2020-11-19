// .ENV File
require("dotenv").config()

// Fastify
const fastify = require("fastify")({
    logger: true
})

// Fastify CORS
fastify.register(require("fastify-cors"), {
    origin: "*",
    credentials: true
})

// Mongoose
const mongoose = require("mongoose")

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@graphql-api.fyhgt.mongodb.net/fastifyapi?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

module.exports = fastify