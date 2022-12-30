import React, { Component } from 'react';

class FormPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className=''>
                <h2 className='text-3xl mb-4'>Personal Information</h2>
                <div className='grid grid-cols-2'>
                    <div className='mb-4'>
                        <label className='block w-full'>First Name</label>
                        <input onInput={this.props.updatePersonalInfo} id='firstname' placeholder='First Name' className='p-2'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block w-full'>Last Name</label>
                        <input onInput={this.props.updatePersonalInfo} id='lastname' placeholder='Last Name' className='p-2'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block w-full'>Phone Number</label>
                        <input onInput={this.props.updatePersonalInfo} id='phone' placeholder='(555) 555-5555' className='p-2'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block w-full'>Email Address</label>
                        <input onInput={this.props.updatePersonalInfo} id='email' placeholder='email@email.com' className='p-2'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block w-full'>LinkedIn URL</label>
                        <input onInput={this.props.updatePersonalInfo} id='linkedin' placeholder='linkedin.com/in/username' className='p-2'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block w-full'>GitHub URL</label>
                        <input onInput={this.props.updatePersonalInfo} id='github' placeholder='github.com/username' className='p-2'></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormPersonalInfo;