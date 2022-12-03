import axios from 'axios';

export class MockYoutubeClient {
  async search() {
    return axios.get('/data/search.json');
  }

  async videos() {
    return axios.get('/data/pop.json');
  }
}
