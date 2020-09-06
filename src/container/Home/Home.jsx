import React, { PureComponent } from 'react';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <p>Life Cycle Component</p>
        <hr />
        <LifeCycleComp />
      </div>
    );
  }
}

export default Home;
