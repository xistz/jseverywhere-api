// index.js
// This is the main entry point of our application
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
require("dotenv").config()

const db = require("./db")
const models = require("./models")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")

const port = process.env.PORT  || 4000
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

const app = express()
db.connect(
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
)

const server = new ApolloServer(
  {
    typeDefs, 
    resolvers,
    context: () => {
      return { models }
    }
  }
)
server.applyMiddleware({ app, path: "/api"})

app.listen(
  {port}, 
  () =>  console.log(`GraphQL server running at http://localhost:${port}${server.graphqlPath}`)
)
