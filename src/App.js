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
        descriptions: [{
          id: uniqid(),
          description: '',
        }]
      }],

      projects: [{
        id: uniqid(),
        project: '',
        tech: '',
        link: '',
        descriptions: [{
          id: uniqid(),
          decription: '',
        }]
      }]
    };

    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.addExperienceDescription = this.addExperienceDescription.bind(this);
    this.deleteExperienceDescription = this.deleteExperienceDescription.bind(this);
    this.updateProjects = this.updateProjects.bind(this);
    this.addProject = this.addProject.bind(this);
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

  // Updates experience state
  updateExperience(e) {
    this.setState(prevState => {
      let index = this.state.experience.findIndex(experience => experience.id === e.target.id);
      let experience = Object.assign({}, prevState.experience[index]);
      if (e.target.name !== 'description') {
        experience[e.target.name] = e.target.value;
      } else {
        let descriptionIndex = this.state.experience[index].descriptions.findIndex(description => description.id === e.target.dataset.descriptionid)
        experience.descriptions[descriptionIndex][e.target.name] = e.target.value;
      }
      return({
        ...prevState,
        experience: [
          ...this.state.experience.slice(0, index),
          experience,
          ...this.state.experience.slice(index+1)
        ]
      })
    })
  };

  // Adds new experience object to this.state.experience
  addExperience() {
    this.setState({
      experience: this.state.experience.concat({
        id: uniqid(),
        job: '',
        start: '',
        end: '',
        company: '',
        city: '',
        province: '',
        descriptions: [{
          id: uniqid(),
          description: '',
        }]
      }) 
    })
  };

  // Deletes experience from this.state.experience with specific id
  deleteExperience(e) {
    this.setState(prevState => {
      let index = this.state.experience.findIndex(experience => experience.id === e.target.parentNode.id);
      return({
        ...prevState,
        experience: [
          ...this.state.experience.slice(0, index),
          ...this.state.experience.slice(index+1)
        ]
      })
    })
  };

  // Adds new experience description object to this.state.experience.descriptions
  addExperienceDescription(e) {
    this.setState(prevState => {
      let index = this.state.experience.findIndex(experience => experience.id === e.target.parentNode.id);
      let experience = Object.assign({}, prevState.experience[index]);
      let descriptions = experience.descriptions;
      descriptions = descriptions.concat({
        id: uniqid(),
        description: '',
      })
      experience['descriptions'] = descriptions;
      return({
        ...prevState,
        experience: [
          ...this.state.experience.slice(0, index),
          experience,
          ...this.state.experience.slice(index+1)
        ]
      })
    })
  };

  // Deletes description from this.state.experience.description with specific id
  deleteExperienceDescription(e) {
    this.setState(prevState => {
      let index = this.state.experience.findIndex(experience => experience.id === e.target.parentNode.id);
      let experience = Object.assign({}, prevState.experience[index]);
      let descriptionIndex = this.state.experience[index].descriptions.findIndex(description => description.id === e.target.parentNode.dataset.descriptionid)
      let descriptions = [
        ...this.state.experience[index].descriptions.slice(0, descriptionIndex),
        ...this.state.experience[index].descriptions.slice(descriptionIndex+1)
      ]
      experience['descriptions'] = descriptions;
      return({
        ...prevState,
        experience: [
          ...this.state.experience.slice(0, index),
          experience,
          ...this.state.experience.slice(index+1)
        ]
      })
    })
  };

  // Updates projects state
  updateProjects(e) {
    this.setState(prevState => {
      let index = this.state.projects.findIndex(project => project.id === e.target.id);
      let project = Object.assign({}, prevState.projects[index]);
      if (e.target.name !== 'description') {
        project[e.target.name] = e.target.value;
      } else {
        let descriptionIndex = this.state.projects[index].descriptions.findIndex(description => description.id === e.target.dataset.descriptionid)
        project.descriptions[descriptionIndex][e.target.name] = e.target.value;
      }
      return({
        ...prevState,
        projects: [
          ...this.state.projects.slice(0, index),
          project,
          ...this.state.projects.slice(index+1)
        ]
      })
    })
  };

  // Adds new project object to this.state.projects
  addProject() {
    this.setState({
      projects: this.state.projects.concat({
        id: uniqid(),
        project: '',
        tech: '',
        link: '',
        descriptions: [{
          id: uniqid(),
          decription: '',
        }]
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
                experience={this.state.experience}
                updateExperience={this.updateExperience}
                addExperience={this.addExperience}
                deleteExperience={this.deleteExperience}
                addExperienceDescription={this.addExperienceDescription}
                deleteExperienceDescription={this.deleteExperienceDescription}
                projects={this.state.projects}
                updateProjects={this.updateProjects}
                addProject={this.addProject} />
          <Resume personalInfo={this.state.personalInfo}
                  education={this.state.education}
                  experience={this.state.experience} />
        </div>
      </div>
      
    )
  }
};

export default App;
