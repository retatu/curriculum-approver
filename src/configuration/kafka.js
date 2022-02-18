const { Kafka } = require('kafkajs')

const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password, KAFKA_USE_SSL: ssl, KAFKA_CLIENT_ID: clientId } = process.env
const sasl = username && password ? { username, password, mechanism: 'plain' } : null

const kafka = new Kafka({
  clientId,
  brokers: [process.env.KAFKA_HOST],
  ssl,
  sasl
})

module.exports = kafka