import React, { Component } from 'react';

class FormPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='h-96'>
                <h2 className='text-3xl'>Personal Information</h2>
                <div className='mb-4'>
                    <label className='mr-5 block w-full'>Name</label>
                    <input onInput={this.props.updatePersonalInfo} id='name' placeholder='FirstName LastName' className='p-2'></input>
                </div>
                <div className='mb-4'>
                    <label className='mr-5 block w-full'>Phone Number</label>
                    <input onInput={this.props.updatePersonalInfo} id='phone' placeholder='(555) 555-5555' className='p-2'></input>
                </div>
                <div className='mb-4'>
                    <label className='mr-5 block w-full'>Email Address</label>
                    <input onInput={this.props.updatePersonalInfo} id='email' placeholder='email@email.com' className='p-2'></input>
                </div>
            </div>
        )
    }
}

export default FormPersonalInfo;