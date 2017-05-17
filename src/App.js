import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Route exact path="/" component={TodoList}/>
      </div>
    )
  }
}

export default App