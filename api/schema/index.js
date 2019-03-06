const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type User {
  _id: ID!
  email: String!
  password: String!
  role: String!
}

type Employee {
    _id: ID!
    code: String!
    name: String!
    designation: String!
    level: String!
    band: String!
    department: String!
    manager_code: String!
    manager_name: String!
    hod_code: String!
    hod_name: String!
    email: String!
    is_active: String!
  }

type AuthData {
  userId: ID!
  role: String!
  token: String!
  tokenExpiration: Int!
}

type Client {
  _id: ID!
  client: String!
  territory: String!
  origin: String!
  service_name: String!
}

type Label {
  _id: ID!
  agreement_number: String!
  vendor: String!
  effective_date: String!
  end_date: String!
  deal: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    login(email: String!, password: String!): AuthData!
    clients: [Client!]!
    labels: [Label!]!
}

type RootMutation {
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
