import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {num : 0};
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <CounterGroup counterNum={5}/>
        </p>
      </div>
    );
  }
}

export default App;
