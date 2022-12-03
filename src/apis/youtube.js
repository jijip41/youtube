export class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#searchByPopular();
  }
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({ part: 'snippet', maxResults: 25, q: keyword })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #searchByPopular() {
    return this.apiClient
      .videos({ part: 'snippet', maxResults: 25, chart: 'mostPopular' })
      .then((res) => res.data.items);
  }
}
