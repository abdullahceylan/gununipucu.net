import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from './profile-image.png';
import { rhythm } from '../../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Abdullah Ceylan`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 410 }}>
          <a href="https://mobile.twitter.com/ceylanabdullah">
            Abdullah Ceylan
          </a>
          <br />
          Düşüncelerimi kelimelere ve kodlara dönüştürdüm.
        </p>
      </div>
    );
  }
}

export default Bio;
