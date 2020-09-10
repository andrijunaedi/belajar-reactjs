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
    this.getPostAPI();
  }

  getPostAPI = () => {
    axios.get('http://localhost:5000/posts').then((result) => {
      this.setState({
        posts: result.data,
      });
    });
  };

  handleRemove = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => this.getPostAPI());
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <p className="section-title">Blog Post</p>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            desc={post.body}
            remove={this.handleRemove}
          />
        ))}
        <Post title="title" desc="desc" />
      </>
    );
  }
}

export default BlogPost;
