import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Home.css';
import BlogPost from '../BlogPost/BlogPost';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends PureComponent {
  render() {
    return (
      <Router>
        <>
          <div className="navigation">
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">Life Cycle</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
        </>
      </Router>
    );
  }
}

export default Home;
