import React, { Component } from 'react';
import axios from 'axios';
import './BlogPost.css';
import Post from '../../component/Post/Post';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts').then((result) => {
      this.setState({
        posts: result.data,
      });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <p className="section-title">Blog Post</p>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} desc={post.body} />
        ))}
        <Post title="title" desc="desc" />
      </>
    );
  }
}

export default BlogPost;
