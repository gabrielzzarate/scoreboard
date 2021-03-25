const axios = require('axios');

class Api {
  constructor(id = '') {
    this.req = axios.create({
      baseURL: 'https://chumley.barstoolsports.com/dev/data/games/' + id + '.json',
      timeout: 30000,
    });
  }

  async getScores() {

    try {
      const req = await this.req.get();

      return req && req.data;
    } catch (e) {
      if (e) {
        console.log('e', e);
        return null;
      }
    }
  }
}

module.exports = Api;