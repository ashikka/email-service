const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

module.exports = broker

broker.start()

const ApiService = require('moleculer-web')

broker.createService({
  mixins: [ApiService],
  settings: {
    port: process.env.PORT || '3000',
    cors: {
      origin: '*'
    }
  }
})
