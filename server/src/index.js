const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

  

  const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: () => async (parent, args, context) => {
          return context.prisma.user.findMany()
      },
    },
    Mutation: {
        post: (parent, args, context, info) => {
           const newUser = context.prisma.user.create({
               data: {
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                profile_pic: args.profile_pic,
                username: args.username,
                password: args.password
              }
           })
          return newUser
        }
  }
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: {
        prisma
    }
})

server
    .listen()
    .then(({ url }) => {
        console.log(`Server is running on ${url}`)
    })