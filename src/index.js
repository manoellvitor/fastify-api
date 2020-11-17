// Routes
const routes = require("./routes")

// Swagger Options
const swagger = require("./config/swagger")

// Mongoose
const mongoose = require("mongoose")

// Env Configure
const dotenv = require("dotenv")
dotenv.config()

// Require the framework
const fastify = require("fastify")({
    logger: true
})

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options)

// Declare the route
routes.forEach((route, index) => {
    fastify.route(route)
})


// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@graphql-api.fyhgt.mongodb.net/fastifyapi?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

// Run the Server
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.swagger()
        fastify.log.info(`Server Listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()