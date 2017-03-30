import { combineReducers } from 'redux';
import blogPostsReducer from '../reducers/blogPostsReducer';
const rootReducer = combineReducers({
  blogPostList: blogPostsReducer
});

export default rootReducer;