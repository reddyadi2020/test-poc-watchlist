const { gql } = require('apollo-server');

const typeDefs = gql`

  type WatchlistResponse {
    watchlistId: Int
    userId:String
    contentAssignmentId:String
    type:String
    createdDate:String
  }

  type Query {
    GetWatchlistbyID(userIds: String): [WatchlistResponse]
  }
`;

module.exports = typeDefs;
