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
        minor: '',
      }],

      experience: [{
        id: uniqid(),
        job: '',
        start: '',
        end: '',
        company: '',
        city: '',
        province: '',
        descriptions: {
          id: uniqid(),
          description: '',
        }
      }]
    };

    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  };
  
  // Updates personal information state
  updatePersonalInfo(e) {
    this.setState(prevState => {
      let personalInfo = Object.assign({}, prevState.personalInfo);
      personalInfo[e.target.name] = e.target.value;
      return ({
        ...prevState,
        personalInfo
      })
    })
  };

  // Updates education state
  updateEducation(e) {
    this.setState(prevState => {
      let index = this.state.education.findIndex(education => education.id === e.target.id);
      let education = Object.assign({}, prevState.education[index]);
      education[e.target.name] = e.target.value;
      return({
        ...prevState,
        education: [
          ...this.state.education.slice(0, index),
          education,
          ...this.state.education.slice(index+1)
        ]
      })
    })
  };

  // Adds new education object to this.state.education
  addEducation() {
    this.setState({
      education: this.state.education.concat({
        id: uniqid(),
        school: '',
        city: '',
        province: '',
        start: '',
        end: '',
        degree: '',
        major: '',
        minor: '',
      }) 
    })
  }

  // Deletes education from this.state.education with specific id
  deleteEducation(e) {
    this.setState(prevState => {
      let index = this.state.education.findIndex(education => education.id === e.target.parentNode.id);
      return({
        ...prevState,
        education: [
          ...this.state.education.slice(0, index),
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
                updateEducation={this.updateEducation}
                addEducation={this.addEducation}
                deleteEducation={this.deleteEducation}
                experience={this.state.experience} />
          <Resume personalInfo={this.state.personalInfo}
                  education={this.state.education} />
        </div>
      </div>
      
    )
  }
};

export default App;
