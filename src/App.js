import React, { Component } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className='columns-2 mt-20'>
          <Form />
          <div className='flex justify-center'>BYE</div>
        </div>
      </div>
      
    )
  }
}

export default App;
