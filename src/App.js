import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import './api/config'
import './style.less'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/Login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
