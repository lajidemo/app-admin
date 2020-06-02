import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import './api/mock'
import $axios from 'api/config';
import App from './App';

Component.prototype.$axios = $axios

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

