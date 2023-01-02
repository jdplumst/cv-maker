import React, { Component } from 'react';
import ResumePersonalInfo from './ResumePersonalInfo';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';

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
                </div>
            </div>
        )
    }
}

export default Resume;