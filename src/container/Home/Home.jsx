import React, { PureComponent } from 'react';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showComp: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showComp: false,
      });
    }, 10000);
  }

  render() {
    const { showComp } = this.state;
    return (
      <div>
        <p>Life Cycle Component</p>
        <hr />
        {showComp ? <LifeCycleComp /> : null}
      </div>
    );
  }
}

export default Home;
