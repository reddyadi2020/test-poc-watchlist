const resolvers = {
  Query: {
    GetWatchlistbyID:(_, { userIds }, { dataSources }) => {
      return dataSources.weatherAPI.withCity(userIds)
    }
  }
};

module.exports = resolvers;