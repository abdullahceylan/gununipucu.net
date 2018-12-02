import React, { Component } from 'react';
import kebabCase from 'lodash/kebabCase';
import Link from 'gatsby-link';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div
        className="TagsContainer"
        style={{
          fontSize: '11px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          textTransform: 'lowercase',
          fontStyle: 'italic',
          margin: '10px 0',
        }}
      >
        <strong style={{ marginRight: '10px' }}>Etiketler:</strong>
        <br />
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              className="SingleTag"
              to={'#'}
              //to={`/tags/${kebabCase(tag)}`}
              style={{
                marginRight: '6px',
              }}
            >
              {tag}
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
