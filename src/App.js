import React, { Component } from 'react';

// Components
import Header from './components/Header';
import Content from './components/Content';
import Aside from './components/Aside';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Content />
        <Aside />
      </div>
    );
  }
}

export default App;

