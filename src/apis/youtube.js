export class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#searchByPopular();
  }

  async searchRelatedVideoListByVideoId(videoId) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 10,
          relatedToVideoId: videoId,
          type: 'video',
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async getChannelImgUrl(channelId) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id: channelId } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({ params: { part: 'snippet', maxResults: 25, q: keyword } })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #searchByPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
          regionCode: 'GB',
        },
      })
      .then((res) => res.data.items);
  }
}
