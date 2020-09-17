import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import API from '../../../services';

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
      isUpdate: false,
      comments: [],
    };
  }

  componentDidMount() {
    this.getPostAPI();
  }

  getPostAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        posts: result,
      });
    });
    API.getComments().then((result) => {
      this.setState({
        comments: result,
      });
    });
  };

  handleFormChange = (event) => {
    const { formBlogPost, isUpdate } = this.state;
    const formBlogPostNew = { ...formBlogPost };
    const timestamp = new Date().getTime();

    if (!isUpdate) {
      formBlogPostNew.id = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSave = () => {
    const { formBlogPost, isUpdate } = this.state;
    if (isUpdate) {
      axios
        .put(`http://localhost:5000/posts/${formBlogPost.id}`, formBlogPost)
        .then(() => {
          this.getPostAPI();
          this.setState({
            isUpdate: false,
            formBlogPost: {
              userId: 1,
              id: 1,
              title: '',
              body: '',
            },
          });
        });
    } else {
      axios.post('http://localhost:5000/posts', formBlogPost).then(() => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: '',
          },
        });
      });
    }
  };

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleRemove = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => this.getPostAPI());
  };

  handleDetail = (id) => {
    this.props.history.push(`/detail/${id}`);
  };

  render() {
    const { posts, formBlogPost, comments } = this.state;
    return (
      <>
        <p className="section-title">Page Blog Post</p>
        <hr />
        <div className="form-add-post">
          <label htmlFor="title">
            <p>Title</p>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={formBlogPost.title}
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
              value={formBlogPost.body}
              onChange={this.handleFormChange}
            />
          </label>
          <button type="submit" className="btn-save" onClick={this.handleSave}>
            Save
          </button>
        </div>
        {comments.map((comment) => (
          <p>
            {comment.name} - {comment.email}
          </p>
        ))}
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            desc={post.body}
            data={post}
            update={this.handleUpdate}
            remove={this.handleRemove}
            goDetail={this.handleDetail}
          />
        ))}
      </>
    );
  }
}

export default withRouter(BlogPost);
