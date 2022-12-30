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
                <div className='container m-10 bg-gray-100 shadow-lg p-5 h-screen'>
                    <FormPersonalInfo updatePersonalInfo={this.props.updatePersonalInfo} />
                    <FormEducation />
                </div>
            </div>
        )
    }
}

export default Form;