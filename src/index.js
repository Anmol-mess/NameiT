import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import {Browser as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

