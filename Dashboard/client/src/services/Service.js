import { BASE_URL } from '../helpers/constants';

export default {
  async loadServices(campaignId, releaseDate) {
    if (campaignId === '-1') {
      campaignId = '';
    }
    const result = await fetch(
      `${BASE_URL}servicesBy?campaignId=${campaignId}&releaseDate=${releaseDate}`
    )
      .then(response => response.json())
      .then(data => data);
    return result;
  }
};
