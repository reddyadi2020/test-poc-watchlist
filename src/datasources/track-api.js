const { RequestOptions, RESTDataSource } = require('apollo-datasource-rest');

const CLIENT_ID = '966f624099be4c008b78082872cc8f86'
const CLIENT_SECRET = '952a3811a9d34004Abdc7387009b3FB4'
const API_URL = 'https://bt-bxp-sapi-watchlist-item.us-w2.cloudhub.io/api/'

class WeatherAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = API_URL
  }

  async withCity(sfid) {
    const data = await this.get('watchlistItems', { userIds: sfid },
    
    {
    headers: {
        'client_id': CLIENT_ID,
        'client_secret':CLIENT_SECRET
      },
    }
    
    )
    return data;
  }
}

module.exports = WeatherAPI;