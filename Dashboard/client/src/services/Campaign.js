import { BASE_URL } from '../helpers/constants';

export default {
  async loadCampaigns() {
    const result = await fetch(`${BASE_URL}campaigns`)
      .then(response => response.json())
      .then(data => data);
    return result;
  }
};
