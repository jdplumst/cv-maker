import React, { Component } from 'react';
import FormInput from './FormInput';

class FormEducation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className='text-3xl mb-4'>Education</h2>
                <div className='grid grid-cols-2'>
                <FormInput update={this.props} label='School' id='school' placeholder='University of Waterloo' />
                </div>
            </div>
        )
    }
}

export default FormEducation;