import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
  const { time, title, desc } = props;
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://wp-en.oberlo.com/wp-content/uploads/2019/04/image8-2-1024x576.png"
          alt=""
        />
        <p className="time">{time}</p>
      </div>
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  time: '00.00',
  title: 'This is title',
  desc: 'This desc',
};

export default YouTubeComp;
