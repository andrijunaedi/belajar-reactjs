import React from 'react';

const Post = (_props) => (
  <div className="post">
    <div className="img-thumb">
      <img src="https://placeimg.com/200/150/tech" alt="dummy" />
    </div>
    <div className="content">
      <p className="title">{_props.title}</p>
      <p className="desc">{_props.desc}</p>
      <button
        type="submit"
        className="btn-update"
        onClick={() => _props.update(_props.data)}
      >
        Update
      </button>
      <button
        type="submit"
        className="btn"
        onClick={() => _props.remove(_props.id)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default Post;
