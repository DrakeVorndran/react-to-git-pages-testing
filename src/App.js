/* eslint-disable no-undef */
import React from 'react';
import './App.css';

import MyComponent from './MyComponent'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/hello" render={() => <MyComponent text="Hello World" />} />
            <Route exact path="/goodbye" render={() => <MyComponent text="Goodbye World" />} />
            <Route exact path="/orange" render={() => <MyComponent text="I like oranges" />} />
          </Switch>

          <Link to="hello">hi</Link>
          <Link to="goodbye">bye</Link>
          <Link to="orange">fruit</Link>

        </header>
      </div>
    </Router>
  );
}

export default App;
