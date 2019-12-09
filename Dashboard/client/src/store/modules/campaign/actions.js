export function setCampaign(data) {
  return { type: '@campaign/SET_CAMPAIGN', payload: data };
}

export function setReleaseDate(data) {
  return { type: '@campaign/SET_RELEASE_DATE', payload: data };
}
