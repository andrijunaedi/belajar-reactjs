import React, { PureComponent } from 'react';
import BlogPost from '../BlogPost/BlogPost';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
