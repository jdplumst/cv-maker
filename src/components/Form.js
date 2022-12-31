import React, { Component } from 'react';
import FormPersonalInfo from './FormPersonalInfo';
import FormEducation from './FormEducation';

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
                                   addEducation={this.props.addEducation} />
                </div>
            </div>
        )
    }
}

export default Form;