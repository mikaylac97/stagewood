// graphQL configuration

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'mikayla',
  password: 'Test12345',
  database: 'acme'
})

db.connect();

const schema = buildSchema(`
  type Query {
    user(id: Int!): User
    users: [User]
  }
  type User {
    id: Int
    first_name: String
    last_name: String
    email: String  
    profile_pic: String
    username: String
    password: String
  }
`);

const getUser = (args, context) => {
    const { id } = args;
    return context.prisma.user.findOne({
      where: {
        id,
      },
      include: { }
    })
}

const getUsers = () => {

}

const root = {
  user: getUser,
  users: getUsers
};

// Create express server and graphQL endpoint

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    contextValue: {
      prisma
    }
  }))
  