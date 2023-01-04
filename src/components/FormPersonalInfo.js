import React, { useState } from 'react';
import FormInput from './FormInput';

function FormPersonalInfo(props) {
    return (
        <div>
            <h2 className='text-3xl mb-4'>Personal Information</h2>
            <div className='grid grid-cols-2'>
                <FormInput update={props.updatePersonalInfo} 
                           label='First Name' 
                           name='firstname' 
                           placeholder='First Name' />
                <FormInput update={props.updatePersonalInfo} 
                           label='Last Name' 
                           name='lastname' 
                           placeholder='Last Name' />
                <FormInput update={props.updatePersonalInfo} 
                           label='Phone Number' 
                           name='phone' 
                           placeholder='(555) 555-5555' />
                <FormInput update={props.updatePersonalInfo} 
                           label='Email Address' 
                           name='email' 
                           placeholder='email@email.com'/>
                <FormInput update={props.updatePersonalInfo} 
                           label='LinkedIn URL' 
                           name='linkedin' 
                           placeholder='linkedin.com/in/username' />
                <FormInput update={props.updatePersonalInfo} 
                           label='GitHub URL' 
                           name='github' 
                           placeholder='github.com/username' />
            </div>
            <hr className='border-black mb-4 border-2'></hr>
        </div>
    )
}

export default FormPersonalInfo;