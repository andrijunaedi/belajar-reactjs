// Library
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import BlogPost from '../pages/BlogPost/BlogPost';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Hooks from '../pages/Hooks/Hooks';

// Style
import './Home.css';

class Home extends PureComponent {
  render() {
    return (
      <Router>
        <>
          <div className="navigation">
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">Life Cycle</Link>
            <Link to="/youtube">Youtube</Link>
            <Link to="/hooks">Hooks</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube" component={YoutubeCompPage} />
          <Route path="/hooks" component={Hooks} />
        </>
      </Router>
    );
  }
}

export default Home;
