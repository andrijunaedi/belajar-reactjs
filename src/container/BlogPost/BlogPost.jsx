import React, { Component } from 'react';
import axios from 'axios';
import './BlogPost.css';
import Post from '../../component/Post/Post';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      formBlogPost: {
        userId: 1,
        id: 1,
        title: '',
        body: '',
      },
    };
  }

  componentDidMount() {
    this.getPostAPI();
  }

  getPostAPI = () => {
    axios
      .get('http://localhost:5000/posts?_sort=id&_order=desc')
      .then((result) => {
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

  handleFormChange = (event) => {
    const { formBlogPost } = this.state;
    const formBlogPostNew = { ...formBlogPost };
    const timestamp = new Date().getTime();
    formBlogPostNew.id = timestamp;
    formBlogPostNew[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSave = () => {
    const { formBlogPost } = this.state;
    axios
      .post('http://localhost:5000/posts', formBlogPost)
      .then(() => this.getPostAPI())
      .catch((error) => console.log(error));
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">
            <p>Title</p>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              onChange={this.handleFormChange}
            />
          </label>
          <label htmlFor="body">
            <p>Blog Content</p>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              placeholder="Add blog content"
              onChange={this.handleFormChange}
            />
          </label>
          <button type="submit" className="btn-save" onClick={this.handleSave}>
            Save
          </button>
        </div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            desc={post.body}
            remove={this.handleRemove}
          />
        ))}
      </>
    );
  }
}

export default BlogPost;
