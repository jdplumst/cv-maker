import React, { Component } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        name: '',
      }
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName(e) {
    this.setState({
      personalInfo: {
        name: e.target.value,
      }
    })
  };

  render() {
    return (
      <div>
        <Header />
        <div className='columns-2'>
          <Form updateName={this.updateName} />
          <Resume personalInfo={this.state.personalInfo} />
        </div>
      </div>
      
    )
  }
}

export default App;
