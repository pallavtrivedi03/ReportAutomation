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
  services: [Service!]!
}

type Label {
  _id: ID!
  vendor: String!
  agreements: [Agreement!]!
}

type Agreement {
  agreementNumber: String!
  effectiveDate: String!
  endDate: String!
  deal: String!
}

type Service {
  name: String!
  regionInfo: [RegionInfo!]!
}

type RegionInfo {
  origin: String!
  territory: String!
}

type Report {
  label: String!
  deal: String!
  type: String!
  from: String!
  to: String!
  path: String!
  status: String!
  totalPayout: Float!
  clients: [ReportClient!]!
}

type ReportClient {
  client: String!
  payout: Float!
  services: [ReportService!]!
}

type ReportService {
  name: String!
  payout: Float!
  regionInfo: [ReportRegionInfo!]!
}

type ReportRegionInfo {
  origin: String!
  territory: String!
  payout: Float!
}

input UserInput {
  email: String!
  password: String!
}

input ReportInput {
  label: String!
  deal: String!
  type: String!
  from: String!
  to: String!
  path: String!
  reportJson: String!
  clients: [ClientInput!]!
}

input ClientInput {
  client: String!
  service: String!
  origin: String!
}

type RootQuery {
    login(email: String!, password: String!): AuthData!
    clients: [Client!]!
    labels: [Label!]!
}

type RootMutation {
    createUser(userInput: UserInput): User
    createReport(reportInput: ReportInput): Report
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
