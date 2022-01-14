require('dotenv').config()

const { v4: uuidv4 } = require('uuid')
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

    channel.assertQueue('', { exclusive: true }, (error2, q) => {
      if (error2) {
        throw error2
      }

      const correlationId = uuidv4()
      const queue = 'groceries'
      const request = 'listCategories'

      channel.consume(q.queue, msg => {
        if (msg.properties.correlationId === correlationId) {
          const message = msg.content.toString().trim()
          const request = app(message)

          if (message.split('-|-')[0] === 'ERROR') {
            setTimeout(() => {
              connection.close()
              process.exit(0)
            }, 500)
          } else {
            channel.sendToQueue(queue,
              Buffer.from(request), {
              correlationId: correlationId,
              replyTo: q.queue
            })
          }
        }
      }, {
        noAck: true
      })

      console.log(request)
      channel.sendToQueue(queue,
        Buffer.from(request), {
        correlationId: correlationId,
        replyTo: q.queue
      })
    })
  })
})