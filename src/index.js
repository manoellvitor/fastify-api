
// Mongoose
const mongoose = require("mongoose")

// Env Configure
const dotenv = require("dotenv")
dotenv.config()

// Require the framework
const fastfy = require("fastify")({
    logger: true
})

// Declare the route
fastfy.get("/", async (req, res) => {
    return { 
        hello: "World"
    }
})

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@graphql-api.fyhgt.mongodb.net/fastifyapi?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

// Run the Server
const start = async () => {
    try {
        await fastfy.listen(3000)
        fastfy.log.info(`Server Listening on ${fastfy.server.address().port}`)
    } catch (err) {
        fastfy.log.error(err)
        process.exit(1)
    }
}
start()