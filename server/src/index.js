// Import Server
const fastify = require("./server.js")

// .ENV File
require("dotenv").config()

// Fastify
const gql = require("fastify-gql")

// GraphQL Schema
const schema = require("./schema")

// Register Fastify GraphQL
fastify.register(gql, {
    schema,
    graphiql: true
})

// Import Routes
const routes = require("./routes")

// Import Swagger Options
const swagger = require("./config/swagger")

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options)

// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route)
})

// Run the Server!
const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
        fastify.swagger()
        fastify.log.info(`Server Listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()