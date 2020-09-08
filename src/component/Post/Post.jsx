import React from 'react';

const Post = (_props) => (
  <div className="post">
    <div className="img-thumb">
      <img src="https://placeimg.com/200/150/tech" alt="dummy" />
    </div>
    <div className="content">
      <p className="title">{_props.title}</p>
      <p className="desc">{_props.desc}</p>
    </div>
  </div>
);

export default Post;
