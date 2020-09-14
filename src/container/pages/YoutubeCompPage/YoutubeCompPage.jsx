import React, { PureComponent } from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends PureComponent {
  render() {
    return (
      <>
        <p>Youtube Component</p>
        <hr />
        <YouTubeComp
          time="34.3"
          title="Tutorial React Bag 1"
          desc="200x ditonton 1 hari yang lalu"
        />
        <YouTubeComp
          time="20.0"
          title="Tutorial React Bag 2"
          desc="300x ditonton 2 hari yang lalu"
        />
        <YouTubeComp
          time="23.5"
          title="Tutorial React Bag 3"
          desc="400x ditonton 3 hari yang lalu"
        />
        <YouTubeComp
          time="24.5"
          title="Tutorial React Bag 4"
          desc="500x ditonton 4 hari yang lalu"
        />
      </>
    );
  }
}

export default YoutubeCompPage;
