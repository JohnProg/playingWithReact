const initialState = {
  selected: '-1',
  releaseDate: new Date().getTime()
};

function campaign(state = initialState, action) {
  switch (action.type) {
    case '@campaign/SET_CAMPAIGN':
      return { ...state, ...action.payload };
    case '@campaign/SET_RELEASE_DATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default campaign;
