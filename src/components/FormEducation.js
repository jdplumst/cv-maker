import React from 'react';
import FormInput from './FormInput';

function FormEducation(props) {
    return (
        <div>
            <h2 className='text-3xl mb-4'>Education</h2>
                {props.education.map((education) => {
                    return (
                        <div className='grid grid-cols-2' key={education.id} id={education.id}>
                            <FormInput update={props.updateEducation} 
                                       label='School' 
                                       name='school' 
                                       id={education.id} 
                                       placeholder='University of Waterloo' />
                            <FormInput update={props.updateEducation} 
                                       label='Degree' 
                                       name='degree' 
                                       id={education.id} 
                                       placeholder='Bachelor of Science' />
                            <FormInput update={props.updateEducation} 
                                       label='City' 
                                       name='city' 
                                       id={education.id} 
                                       placeholder='Waterloo' />
                            <FormInput update={props.updateEducation} 
                                       label='Province/State' 
                                       name='province' 
                                       id={education.id} 
                                       placeholder='ON' />
                            <FormInput update={props.updateEducation} 
                                       label='Starting Date' 
                                       name='start' 
                                       id={education.id} 
                                       placeholder='Sept. 2018' />
                            <FormInput update={props.updateEducation} 
                                       label='Ending Date' 
                                       name='end' 
                                       id={education.id} 
                                       placeholder='Apr. 2023' />
                            <FormInput update={props.updateEducation} 
                                       label='Major' 
                                       name='major' 
                                       id={education.id} 
                                       placeholder='Math' />
                            <FormInput update={props.updateEducation} 
                                       label='Minor' 
                                       name='minor' 
                                       id={education.id} 
                                       placeholder='Computer Science' />
                            <hr className='border-black mb-4'></hr>
                            <hr className='border-black mb-4'></hr>
                            <span></span>
                            <button onClick={props.deleteEducation} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 ml-auto'>Delete Education</button>
                            <hr className='border-black mb-4'></hr>
                            <hr className='border-black mb-4'></hr>
                        </div>
                    )
                })}
            <button onClick={props.addEducation} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-48'>Add Education</button>
            <hr className='border-black mb-4 border-2'></hr>
        </div>
    )
}

export default FormEducation;