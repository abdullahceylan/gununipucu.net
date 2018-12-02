import React from 'react';
import Link from 'gatsby-link';

export default class PostListing extends React.Component {
  render() {
    const postList = this.props.postEdges;
    const nonDraftPosts = postList.filter(
      post => post.node.frontmatter.draft !== true
    );
    let displayedPosts = nonDraftPosts;
    console.log(displayedPosts);
    if (this.props.filter) {
      displayedPosts = nonDraftPosts.filter(this.props.filter);
    }
    return (
      <div className="PostsContainer">
        <h4>{displayedPosts.length} Not</h4>
        {displayedPosts.map(post => (
          <div className="SinglePost">
            <h3>
              <Link
                to={post.node.fields.slug}
                key={post.node.frontmatter.title}
                className="PostTitle"
              >
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <Link to={post.node.fields.slug} className="SummaryText">
              <p>{post.node.excerpt}</p>
            </Link>
            <PostTags tags={post.node.frontmatter.tags} />
          </div>
        ))}
      </div>
    );
  }
}
