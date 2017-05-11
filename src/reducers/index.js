import { combineReducers } from 'redux';
import { users, currentUser, orders,instruments } from './reducers';

import {reducer as modalReducer} from 'react-redux-modal'
export default combineReducers({
    users,
    currentUser,
    orders,
    instruments,
    modals: modalReducer 
});
