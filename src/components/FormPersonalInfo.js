import React, { Component } from 'react';
import FormInput from './FormInput';

class FormPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className='text-3xl mb-4'>Personal Information</h2>
                <div className='grid grid-cols-2'>
                    <FormInput update={this.props.updatePersonalInfo} label='First Name' id='firstname' placeholder='First Name' />
                    <FormInput update={this.props.updatePersonalInfo} label='Last Name' id='lastname' placeholder='Last Name' />
                    <FormInput update={this.props.updatePersonalInfo} label='Phone Number' id='phone' placeholder='(555) 555-5555' />
                    <FormInput update={this.props.updatePersonalInfo} label='Email Address' id='email' placeholder='email@email.com'/>
                    <FormInput update={this.props.updatePersonalInfo} label='LinkedIn URL' id='linkedin' placeholder='linkedin.com/in/username' />
                    <FormInput update={this.props.updatePersonalInfo} label='GitHub URL' id='github' placeholder='github.com/username' />
                </div>
            </div>
        )
    }
}

export default FormPersonalInfo;