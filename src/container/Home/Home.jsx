import React, { PureComponent } from 'react';
import Product from '../Product/Product';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <p>Counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;
