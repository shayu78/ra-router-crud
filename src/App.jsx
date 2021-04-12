import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PostsWidget from './components/PostsWidget/PostsWidget';
import PostAdd from './components/PostAdd/PostAdd';
import PostView from './components/PostView/PostView';
import PostEdit from './components/PostEdit/PostEdit';
import PostProvider from './components/PostProvider/PostProvider';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <PostProvider>
      <Router>
        <div className="component__wrapper">
          <Switch>
            <Route path="/posts/new" exact component={PostAdd} />
            <Route path="/posts/edit/:id" exact component={PostEdit} />
            <Route path="/posts/:id" exact component={PostView} />
            <Route path="/" component={PostsWidget} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
