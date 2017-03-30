export namespace Store {
    export type BlogPost = {
        id: number,
        title: string,
        content: string
    };

    export type BlogPostList = Array<BlogPost>;

    export type All = {
        blogPostList: BlogPostList;
    };
}