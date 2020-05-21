import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import config from './api/config'
// import './api/mock'
import App from './App';

Component.prototype.$axios = config.Axios

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

