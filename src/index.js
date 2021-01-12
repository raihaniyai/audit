import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Audit from './components';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Audit} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
