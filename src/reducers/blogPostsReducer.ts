import { Store } from '../store';
import { GET_POSTS } from '../actions/index';

const empty: Store.BlogPostList = [];

const INITIAL_STATE: Store.All = { 
    blogPostList: empty
};

export default function blogPostsReducer(state = INITIAL_STATE, action: any): Store.All {
    console.log("in blogpostreducer " + action.type);
    switch (action.type) {
        case GET_POSTS:
            console.dir(action.payload.data);
            return { blogPostList: action.payload.data };
        default:
            return state;
    }
}