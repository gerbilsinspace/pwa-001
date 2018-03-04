import React, { Component } from 'react';
import Create from './components/Create';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Create />
        <List />
      </div>
    );
  }
}

export default App;
