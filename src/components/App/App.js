import React, { Component } from 'react';
import Header from '../Header/Header';
// import Information from '../Information/Information';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        {/* <Information /> */}
      </div>
    );
  }
}

export default App;
