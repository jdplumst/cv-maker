import React, { Component } from 'react';
import './styles/styles.css';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='columns-2'>
        <Form />
        <div className='flex justify-center'>BYE</div>
      </div>
    )
  }
}

export default App;
