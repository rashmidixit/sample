const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const resolvers = {
    Query: {
        feed: () => links
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${++idCount}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        },
        update: (parent, args) => {
            let id = parseInt(args.id.split("-")[1])
            links[id].url = args.url
            links[id].description = args.description
            return links[id]
        },
        delete: (parent, args) => {
            let id = parseInt(args.id.split("-")[1])
            delete links[id]
            return null
        }
    },

}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        prisma
    }
})

server.start(()=> console.log("Server is running on http://localhost:4000"))