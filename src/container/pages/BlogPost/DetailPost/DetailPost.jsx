import React, { PureComponent } from 'react';
import './DetailPost.css';
import API from '../../../../services';

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
    API.getNewsBlogById(id).then((data) => {
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
