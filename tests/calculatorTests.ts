import blogPostsReducer from '../src/reducers/blogPostsReducer';
import Action from '../src/actions/action';
import axios, { AxiosResponse } from 'axios';
import { Store } from '../src/store';
describe('Actions', function() {
	describe('Blog posts', function() {
		it('Unknown action should return empty post list', function() {
			var dummyAxios: AxiosResponse = null;
			const emptyList: Store.BlogPostList = [];
			const initialState: Store.All = { 
    			all: emptyList
			};
			let action = { type: 'XX', payload: dummyAxios};
			let reducer = blogPostsReducer(initialState, action);
			expect(reducer.all.length).toBe(0);
		});
	});
});