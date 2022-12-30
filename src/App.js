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
        phone: '',
        email: '',
      }
    };

    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
  }
  
  // Calls correct method to update personal information state
  updatePersonalInfo(e) {
    if (e.target.id === 'name') {
      this.updateName(e);
    } else if (e.target.id === 'phone') {
      this.updatePhone(e);
    } else if (e.target.id === 'email') {
      this.updateEmail(e);
    }
  }

  updateName(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          name: e.target.value,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
        }
      })
    })
  };

  updatePhone(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          name: this.state.personalInfo.name,
          phone: e.target.value,
          email: this.state.personalInfo.email,
        }
      })
    })
  };

  updateEmail(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          name: this.state.personalInfo.name,
          phone: this.state.personalInfo.phone,
          email: e.target.value,
        }
      })
    })
  };

  render() {
    return (
      <div>
        <Header />
        <div className='columns-2'>
          <Form updatePersonalInfo={this.updatePersonalInfo} />
          <Resume personalInfo={this.state.personalInfo} />
        </div>
      </div>
      
    )
  }
}

export default App;
