require('dotenv').config()

const amqp = require('amqplib/callback_api')
const app = require('./app')

const connectionUrl = `amqp://${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`

amqp.connect(connectionUrl, (error0, connection) => {
  if (error0) {
    throw error0
  }

  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1
    }

    const queue = 'groceries'

    channel.assertQueue(queue, { durable: false })
    channel.prefetch(1)
    
    console.log('Server is running')

    channel.consume(queue, function reply(msg) {
      const message = msg.content.toString().trim()
      console.log(`Messagem Recebida: ${message}`)

      const response = app(message)

      channel.sendToQueue(msg.properties.replyTo,
        Buffer.from(response), {
        correlationId: msg.properties.correlationId
      })

      channel.ack(msg)
    })
  })
})
