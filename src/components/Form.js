import React, { Component } from 'react';
import FormPersonalInfo from './FormPersonalInfo';
import FormEducation from './FormEducation';
import FormExperience from './FormExperience';
import FormProjects from './FormProjects';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='flex justify-center'>
                <div className='container m-10 bg-gray-100 shadow-lg p-5 h-fit overflow-auto'>
                    <FormPersonalInfo updatePersonalInfo={this.props.updatePersonalInfo} />
                    <FormEducation education={this.props.education} 
                                   updateEducation={this.props.updateEducation} 
                                   addEducation={this.props.addEducation}
                                   deleteEducation={this.props.deleteEducation} />
                    <FormExperience experience={this.props.experience}
                                    updateExperience={this.props.updateExperience}
                                    addExperience={this.props.addExperience}
                                    deleteExperience={this.props.deleteExperience}
                                    addExperienceDescription={this.props.addExperienceDescription}
                                    deleteExperienceDescription={this.props.deleteExperienceDescription} />
                    <FormProjects projects={this.props.projects}
                                  updateProjects={this.props.updateProjects}
                                  addProject={this.props.addProject} />
                </div>
            </div>
        )
    }
}

export default Form;