import * as React from "react";
import { connect } from "react-redux";
import * as redux from "redux";
import {Store} from '../store';
import { IBlogPost } from '../interfaces';

interface IStateProps {
    blogPosts: Array<IBlogPost>;
}

type BlogPostProps = IStateProps;

class BlogPostList extends React.Component<BlogPostProps, any> {
    render() {
        return (
            <div>
                <h2>Posts:</h2>
                { this.props.blogPosts.map((bp) => <div key = {bp.id}>{bp.id}</div>)}
            </div>
        )
    }
}

function mapStateToPros(state: Store.All) : IStateProps {
    return {
        blogPosts: state.blogPostList
    };
}

export default connect(mapStateToPros)(BlogPostList);