import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Cards from './Cards.js';
import Article from './Article.js';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={() => <Cards />} />
      <Route exact path="/article" component={() => <Article />} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
