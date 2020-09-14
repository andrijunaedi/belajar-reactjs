import React, { PureComponent } from 'react';
import axios from 'axios';
import './DetailPost.css';

class DetailPost extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        body: '',
      },
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:5000/posts/${id}`).then((res) => {
      const { data } = res;
      this.setState({
        post: {
          title: data.title,
          body: data.body,
        },
      });
    });
  }

  render() {
    const { post } = this.state;
    return (
      <div className="p-detail-post">
        <p className="detail-title">{post.title}</p>
        <p className="detail-body">{post.body}</p>
      </div>
    );
  }
}

export default DetailPost;
