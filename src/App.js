import React, { Component } from 'react';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='columns-2'>
        <div className='flex justify-center'>HEY</div>
        <div className='flex justify-center'>BYE</div>
      </div>
    )
  }
}

export default App;
