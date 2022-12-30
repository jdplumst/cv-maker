import React, { Component } from 'react';
import ResumePersonalInfo from './ResumePersonalInfo';

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='flex justify-center'>
                <div className='container m-10 bg-gray-100 shadow-lg p-10'>
                    <ResumePersonalInfo personalInfo={this.props.personalInfo} />
                </div>
            </div>
        )
    }
}

export default Resume;