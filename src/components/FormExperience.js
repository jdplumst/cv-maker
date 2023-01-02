import React, { Component } from 'react';
import FormInput from './FormInput';

class FormExperience extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h2 className='text-3xl mb-4'>Experience</h2>
                {this.props.experience.map((experience) => {
                        return (
                            <div className='grid grid-cols-2' key={experience.id} id={experience.id}>
                                <FormInput update={this.props.updateExperience} 
                                           label='Job Title' 
                                           name='job' 
                                           id={experience.id} 
                                           placeholder='Software Engineer' />
                                <FormInput update={this.props.updateExperience} 
                                           label='Company' 
                                           name='company' 
                                           id={experience.id} 
                                           placeholder='Google' />
                                <FormInput update={this.props.updateExperience} 
                                           label='City' 
                                           name='city' 
                                           id={experience.id} 
                                           placeholder='Waterloo' />
                                <FormInput update={this.props.updateExperience} 
                                           label='Province/State' 
                                           name='province' 
                                           id={experience.id} 
                                           placeholder='ON' />
                                <FormInput update={this.props.updateExperience} 
                                           label='Starting Date' 
                                           name='start' 
                                           id={experience.id} 
                                           placeholder='Sept. 2016' />
                                <FormInput update={this.props.updateExperience} 
                                           label='Ending Date' 
                                           name='end' 
                                           id={experience.id} 
                                           placeholder='Apr. 2022' />
                                {experience.descriptions.map((description, index) => {
                                    index++;
                                    return (
                                        <div key={description.id} className='w-full col-span-2'>
                                            <label className='block'>Job Description {index}</label>
                                            <textarea onInput={this.props.updateExperience} name='description' id={experience.id} data-descriptionid={description.id} className='w-full p-2'></textarea>
                                            <div id={experience.id} data-descriptionid={description.id} className='w-full flex'>
                                                <button onClick={this.props.deleteExperienceDescription} className='bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 ml-auto'>Delete Description</button>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button onClick={this.props.addExperienceDescription} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 mr-auto'>Add Description</button>
                                <span></span>
                                <hr className='border-black mb-4'></hr>
                                <hr className='border-black mb-4'></hr>
                                <span></span>
                                <button onClick={this.props.deleteExperience} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 ml-auto'>Delete Experience</button>
                                <hr className='border-black mb-4'></hr>
                                <hr className='border-black mb-4'></hr>
                            </div>
                        )
                    })}
                    <button onClick={this.props.addExperience} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 mr-auto'>Add Experience</button>
                    <hr className='border-black mb-4 border-2'></hr>
            </div>
        )
    };
}

export default FormExperience;