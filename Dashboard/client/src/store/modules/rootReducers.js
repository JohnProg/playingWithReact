import { combineReducers } from 'redux';

import campaign from './campaign/reducers';

const rootReducers = combineReducers({ campaign });
export default rootReducers;
