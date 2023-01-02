import React, { Component } from 'react';
import ResumePersonalInfo from './ResumePersonalInfo';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeSkills from './ResumeSkills';

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='flex justify-center'>
                <div className='container m-10 bg-gray-100 shadow-lg p-5 h-fit overflow-auto'>
                    <ResumePersonalInfo personalInfo={this.props.personalInfo} />
                    <ResumeEducation education={this.props.education} />
                    <ResumeExperience experience={this.props.experience} />
                    <ResumeProjects projects={this.props.projects} />
                    <ResumeSkills skills={this.props.skills} />
                </div>
            </div>
        )
    }
}

export default Resume;