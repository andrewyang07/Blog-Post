import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            console.log('Inside reducer');
            console.log(action.payload.data);
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            // action.payload === id
            // if the state object has that id, then delete it
            return _.omit(state, action.payload);
        default:
            return state;
    }
}