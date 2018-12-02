import React from 'react';
import PostTags from '../PostTags';
import { rhythm, scale } from '../../utils/typography';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  console.log('post', post);
  return (
    <div className="PostContainer">
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostTags tags={post.frontmatter.tags} />
    </div>
  );
};

export default Post;
