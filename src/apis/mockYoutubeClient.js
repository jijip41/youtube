import axios from 'axios';

export class MockYoutubeClient {
  async search({ params }) {
    return await axios.get(
      `/data/${params.relatedToVideoId ? 'related' : 'search'}.json`
    );
  }

  async videos() {
    return axios.get('/data/pop.json');
  }

  async channels() {
    return axios.get('/data/channelInfo.json');
  }
}
