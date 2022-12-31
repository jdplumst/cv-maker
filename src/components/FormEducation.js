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
                            <div className='grid grid-cols-2' key={education.id} id={education.id}>
                                <FormInput update={this.props.updateEducation} 
                                           label='School' 
                                           name='school' 
                                           id={education.id} 
                                           placeholder='University of Waterloo' />
                                <FormInput update={this.props.updateEducation} 
                                           label='Degree' 
                                           name='degree' 
                                           id={education.id} 
                                           placeholder='Bachelor of Mathematics' />
                                <FormInput update={this.props.updateEducation} 
                                           label='City' 
                                           name='city' 
                                           id={education.id} 
                                           placeholder='Waterloo' />
                                <FormInput update={this.props.updateEducation} 
                                           label='Province/State' 
                                           name='province' 
                                           id={education.id} 
                                           placeholder='ON' />
                                <FormInput update={this.props.updateEducation} 
                                           label='Starting Date' 
                                           name='start' 
                                           id={education.id} 
                                           placeholder='Sept. 2016' />
                                <FormInput update={this.props.updateEducation} 
                                           label='Ending Date' 
                                           name='end' 
                                           id={education.id} 
                                           placeholder='Apr. 2022' />
                                <FormInput update={this.props.updateEducation} 
                                           label='Major' 
                                           name='major' 
                                           id={education.id} 
                                           placeholder='Mathematical Studies' />
                                <FormInput update={this.props.updateEducation} 
                                           label='Minor' 
                                           name='minor' 
                                           id={education.id} 
                                           placeholder='Computer Science' />
                                <span></span>
                                <button onClick={this.props.deleteEducation} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2 mb-4'>Delete</button>
                                <hr className='border-black mb-4'></hr>
                                <hr className='border-black mb-4'></hr>
                            </div>
                        )
                    })}
                <button onClick={this.props.addEducation} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'>Add Education</button>
                <hr className='border-black mb-4 border-2'></hr>
            </div>
        )
    }
}

export default FormEducation;