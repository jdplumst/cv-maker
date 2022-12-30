import React, { Component } from 'react';
import './styles/styles.css';
import uniqid from 'uniqid';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
      },
      education: [{
        id: uniqid(),
        school: '',
        city: '',
        province: '',
        start: '',
        end: '',
        degree: '',
        major: '',
      }]
    };

    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
  };
  
  // Calls correct method to update personal information state
  updatePersonalInfo(e) {
    if (e.target.name === 'firstname') {
      this.updateFirstName(e);
    } else if (e.target.name === 'lastname') {
      this.updateLastName(e);
    } else if (e.target.name === 'phone') {
      this.updatePhone(e);
    } else if (e.target.name === 'email') {
      this.updateEmail(e);
    } else if (e.target.name === 'linkedin') {
      this.updateLinkedin(e);
    } else if (e.target.name === 'github') {
      this.updateGithub(e);
    }
  };

  // Calls correct method to update education state
  updateEducation(e) {
    if (e.target.name === 'school') {
      this.updateSchool(e);
    }
  };

  updateFirstName(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: e.target.value,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateLastName(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: e.target.value,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updatePhone(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: e.target.value,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateEmail(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: e.target.value,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateLinkedin(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: e.target.value,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateGithub(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: e.target.value,
        }
      })
    })
  };

  updateSchool(e) {
    let index = this.state.education.findIndex(education => education.id === e.target.id);
    if (index === -1) {
      console.log('wut');
      return;
    }
    this.setState((prevState) => {
      return({
        ...prevState,
        education: [
          ...this.state.education.slice(0, index),
          Object.assign({}, this.state.education[index], {school: e.target.value}),
          ...this.state.education.slice(index+1)
        ]
      })
    })
  };

  render() {
    return (
      <div>
        <Header />
        <div className='columns-2'>
          <Form updatePersonalInfo={this.updatePersonalInfo} 
                education={this.state.education} 
                updateEducation={this.updateEducation} />
          <Resume personalInfo={this.state.personalInfo} />
        </div>
      </div>
      
    )
  }
};

export default App;
