import { Store } from '../store';

export default function blogPostsReducer(): Store.BlogPostList {
    const blogPosts = [
        { id: 1, title: 'post 1', content: 'Lorem ipsum dolor sim amet, quantificatione the la ferrari scusa me.' },
        { id: 2, title: 'second post', content: 'Siala baba mak. Nie wiedziala jak a dziad wiedział, nie powiedział' }
    ];

    return blogPosts;
}