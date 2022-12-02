import axios from 'axios';

export class MockYoutube {
  constructor() {}
  search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#searchByPopular();
  }
  async #searchByKeyword() {
    return axios
      .get('data/search.json')
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #searchByPopular() {
    return axios.get('data/pop.json').then((res) => res.data.items);
  }
}
