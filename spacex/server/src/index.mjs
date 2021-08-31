import { ApolloServer } from 'apollo-server'
import typeDefs from './schema.mjs'

const server = new ApolloServer({ typeDefs })

server.listen().then(() => {
    console.log(`
    🚀 Server is running
    🚀 Listening on port 4000
    `)
})