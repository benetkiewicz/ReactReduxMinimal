import * as React from 'react';
import { Component } from 'react';
import BlogPostList from './blogPostList';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <BlogPostList />
            </div>
        );
    }
}