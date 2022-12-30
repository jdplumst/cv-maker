import React, { Component } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className='columns-2'>
          <Form />
          <Resume />
        </div>
      </div>
      
    )
  }
}

export default App;
