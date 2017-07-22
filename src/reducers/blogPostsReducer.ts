import { Store } from '../store';
import { GET_POSTS } from '../actions/index';
import axios, { AxiosResponse } from 'axios';
import Action from '../actions/action';

const empty: Store.BlogPostList = [];

const INITIAL_STATE: Store.All = { 
    all: empty
};

export default function blogPostsReducer(state = INITIAL_STATE, action: Action<AxiosResponse>): any {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}