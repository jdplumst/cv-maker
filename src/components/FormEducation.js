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
                    {this.props.education.map((education) => {
                        return (
                            <div className='grid grid-cols-2' key={education.id}>
                                <FormInput update={this.props.updateEducation} label='School' name='school' key={education.id} placeholder='University of Waterloo' />
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default FormEducation;