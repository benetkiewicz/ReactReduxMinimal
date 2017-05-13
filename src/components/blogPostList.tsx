import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Store} from '../store';
import { IBlogPost } from '../interfaces';
import { getPosts } from '../actions';

interface IStateProps {
    blogPosts: IBlogPost[];
}

interface IDispatchProps {
    getPosts: any;
}

type BlogPostProps = IStateProps & IDispatchProps;

class BlogPostList extends React.Component<BlogPostProps, any> {
    componentWillMount() {
        console.log('will mount');
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                <h2>Posts:</h2>
                { this.props.blogPosts.map((bp) => { return (<span>{bp.title}</span>)})}
            </div>
        )
    }
}

function mapStateToProps(state: any) : IStateProps {
    return {
        blogPosts: state.blogPostList.blogPostList // TODO: WTF???
    };
}

function mapDispatchToProps(dispatch: any) : IDispatchProps {
    return bindActionCreators({getPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostList);