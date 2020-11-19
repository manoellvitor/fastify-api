exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify API',
      description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: '3000-fe4e4c5e-76a0-4b0a-af4c-fff72727e34a.ws-eu01.gitpod.io/',
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}