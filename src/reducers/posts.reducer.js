import { DELETE_POST, FETCH_POST, FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const { data  } = action.payload;
      return {
        ...state,
        [data.id]: data,
      };
  }
  return state;
};
