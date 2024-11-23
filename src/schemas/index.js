const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    token: String
  }

  type Query {
    users: [User!]!
    me: User
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }
`);