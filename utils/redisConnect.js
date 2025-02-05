import redis from 'redis'

const client = redis.createClient()

client.on('error', (error) => {
    console.log('Error ' + error.message)
})

await client.connect()

export default client