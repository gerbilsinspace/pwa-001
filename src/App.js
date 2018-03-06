import React, { Component } from 'react';
import Create from './components/Create';
import Header from './components/Header';
import List from './components/List';
import Delete from './components/Delete';
import Edit from './components/Edit';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Create />
        <List />
        <Delete />
        <Edit />
      </div>
    );
  }
}

export default App;
