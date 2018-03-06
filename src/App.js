import React, { Component } from 'react';

// Components
import Header from './components/Header';
import Content from './components/Content';
// import Footer from './component/Footer';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Content />
      </div>
    );
  }
}

export default App;

