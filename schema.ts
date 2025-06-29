export const typeDefs = `#graphql
type Museum {
  id: ID!
  name: String!
  address: String!
  phone: String!
  localtime: String!
  temperature: Int!
}

type Query {
  getMuseums(city: String!): [Museum!]!
  getMuseum(id: ID!): Museum
}

type Mutation {
  addMuseum(
    name: String!
    address: String!
    city: String!
    phone: String!
  ): Museum
  deleteMuseum(id: ID!): Boolean!
}
`;
