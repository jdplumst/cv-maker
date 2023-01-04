import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import uniqid from 'uniqid';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });

  const [education, setEducation] = useState([{
    id: uniqid(),
    school: '',
    city: '',
    province: '',
    start: '',
    end: '',
    degree: '',
    major: '',
    minor: '',
  }]);

  const [experience, setExperience] = useState([{
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
  }]);

  const [projects, setProjects] = useState([{
    id: uniqid(),
    project: '',
    tech: '',
    link: '',
    descriptions: [{
      id: uniqid(),
      decription: '',
    }]
  }]);

  const [skills, setSkills] = useState({
    languages: '',
    libraries: '',
    devtools: '',
  });

  // Updates personal information state
  function updatePersonalInfo(e) {
    setPersonalInfo(prevPersonalInfo => {
      let currPersonalInfo = Object.assign({}, prevPersonalInfo);
      currPersonalInfo[e.target.name] = e.target.value;
      return currPersonalInfo;
    })
  };

  // Updates education state
  function updateEducation(e) {
    setEducation(prevEducation => {
      let index = prevEducation.findIndex(education => education.id === e.target.id);
      let currEducation = Object.assign({}, prevEducation[index]);
      currEducation[e.target.name] = e.target.value;
      return ([
        ...prevEducation.slice(0, index),
        currEducation,
        ...prevEducation.slice(index+1)
      ])
    })
  };

  // Adds new education object to this.state.education
  function addEducation() {
    setEducation(prevEducation => {
      return ([
        ...prevEducation, {
        id: uniqid(),
        school: '',
        city: '',
        province: '',
        start: '',
        end: '',
        degree: '',
        major: '',
        minor: ''
        }
      ])
    })
  };

  // Deletes education from this.state.education with specific id
  function deleteEducation(e) {
    setEducation(prevEducation => {
      let index = prevEducation.findIndex(education => education.id === e.target.parentNode.id);
      return ([
        ...prevEducation.slice(0, index),
        ...prevEducation.slice(index+1)
      ])
    })
  };

  // Updates experience state
  function updateExperience(e) {
    setExperience(prevExperience => {
      let index = prevExperience.findIndex(experience => experience.id === e.target.id);
      let currExperience = Object.assign({}, prevExperience[index]);
      if (e.target.name !== 'description') { 
        currExperience[e.target.name] = e.target.value;
      } else {
        let descriptionIndex = prevExperience[index].descriptions.findIndex(description => description.id === e.target.dataset.descriptionid)
        currExperience.descriptions[descriptionIndex][e.target.name] = e.target.value;
      }
      return([
        ...prevExperience.slice(0, index),
        currExperience,
        ...prevExperience.slice(index+1)
      ])
    })
  };

  // Adds new experience object to this.state.experience
  function addExperience() {
    setExperience(prevExperience => {
      return([
        ...prevExperience,
        {
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
        }
      ])
    })
  };

  // Deletes experience from this.state.experience with specific id
  function deleteExperience(e) {
    setExperience(prevExperience => {
      let index = prevExperience.findIndex(experience => experience.id === e.target.parentNode.id);
      return ([
        ...prevExperience.slice(0, index),
        ...prevExperience.slice(index+1)
      ])
    })
  };

  // Adds new experience description object to this.state.experience.descriptions
  function addExperienceDescription(e) {
    setExperience(prevExperience => {
      let index = prevExperience.findIndex(experience => experience.id === e.target.parentNode.id);
      let currExperience = Object.assign({}, prevExperience[index]);
      let descriptions = currExperience.descriptions;
      descriptions = descriptions.concat({
        id: uniqid(),
        description: '',
      })
      currExperience['descriptions'] = descriptions;
      return ([
        ...prevExperience.slice(0, index),
        currExperience,
        ...prevExperience.slice(index+1)
      ])
    })
  };

  // Deletes description from this.state.experience.description with specific id
  function deleteExperienceDescription(e) {
    setExperience(prevExperience => {
      let index = prevExperience.findIndex(experience => experience.id === e.target.parentNode.id);
      let currExperience = Object.assign({}, prevExperience[index]);
      let descriptionIndex = prevExperience[index].descriptions.findIndex(description => description.id === e.target.parentNode.dataset.descriptionid)
      let descriptions = [
        ...prevExperience[index].descriptions.slice(0, descriptionIndex),
        ...prevExperience[index].descriptions.slice(descriptionIndex+1)
      ]
      currExperience['descriptions'] = descriptions;
      return ([
        ...prevExperience.slice(0, index),
        currExperience,
        ...prevExperience.slice(index+1)
      ])
    })
  };

  // Updates projects state
  function updateProjects(e) {
    setProjects(prevProjects => {
      let index = prevProjects.findIndex(project => project.id === e.target.id);
      let currProject = Object.assign({}, prevProjects[index]);
      if (e.target.name !== 'description') {
        currProject[e.target.name] = e.target.value;
      } else {
        let descriptionIndex = prevProjects[index].descriptions.findIndex(description => description.id === e.target.dataset.descriptionid)
        currProject.descriptions[descriptionIndex][e.target.name] = e.target.value;
      }
      return ([
        ...prevProjects.slice(0, index),
        currProject,
        ...prevProjects.slice(index+1)
      ])
    })
  };

  // Adds new project object to this.state.projects
  function addProject() {
    setProjects(prevProjects => {
      return ([
        ...prevProjects,
        {
          id: uniqid(),
          project: '',
          tech: '',
          link: '',
          descriptions: [{
            id: uniqid(),
            decription: '',
          }]
        }
      ])
    })
  };

  // Deletes project from this.state.projects with specific id
  function deleteProject(e) {
    setProjects(prevProjects => {
      let index = prevProjects.findIndex(project => project.id === e.target.parentNode.id);
      return ([
        ...prevProjects.slice(0, index),
        ...prevProjects.slice(index+1)
      ])
    })
  };

  // Adds new project description object to this.state.projects.descriptions
  function addProjectDescription(e) {
    setProjects(prevProjects => {
      let index = prevProjects.findIndex(project => project.id === e.target.parentNode.id);
      let currProject = Object.assign({}, prevProjects[index]);
      let descriptions = currProject.descriptions;
      descriptions = descriptions.concat({
        id: uniqid(),
        description: '',
      })
      currProject['descriptions'] = descriptions;
      return ([
        ...prevProjects.slice(0, index),
        currProject,
        ...prevProjects.slice(index+1)
      ])
    })
  };

  // Deletes description from this.state.projects.description with specific id
  function deleteProjectDescription(e) {
    setProjects(prevProjects => {
      let index = prevProjects.findIndex(project => project.id === e.target.parentNode.id);
      let currProject = Object.assign({}, prevProjects[index]);
      let descriptionIndex = prevProjects[index].descriptions.findIndex(description => description.id === e.target.parentNode.dataset.descriptionid)
      let descriptions = [
        ...prevProjects[index].descriptions.slice(0, descriptionIndex),
        ...prevProjects[index].descriptions.slice(descriptionIndex+1)
      ]
      currProject['descriptions'] = descriptions;
      return ([
        ...prevProjects.slice(0, index),
        currProject,
        ...prevProjects.slice(index+1)
      ])
    })
  };

  // Updates skills state
  function updateSkills(e) {
    setSkills(prevSkills => {
      let currSkills = Object.assign({}, prevSkills);
      currSkills[e.target.name] = e.target.value;
      return (currSkills);
    })
  };

  return (
    <div>
      <Header />
      <div className='columns-2'>
        <Form updatePersonalInfo={updatePersonalInfo} 
              education={education} 
              updateEducation={updateEducation}
              addEducation={addEducation}
              deleteEducation={deleteEducation}
              experience={experience}
              updateExperience={updateExperience}
              addExperience={addExperience}
              deleteExperience={deleteExperience}
              addExperienceDescription={addExperienceDescription}
              deleteExperienceDescription={deleteExperienceDescription}
              projects={projects}
              updateProjects={updateProjects}
              addProject={addProject}
              deleteProject={deleteProject}
              addProjectDescription={addProjectDescription}
              deleteProjectDescription={deleteProjectDescription}
              updateSkills={updateSkills} />
        <Resume personalInfo={personalInfo}
                education={education}
                experience={experience}
                projects={projects}
                skills={skills} />
      </div>
    </div>
  )
} 

export default App;
