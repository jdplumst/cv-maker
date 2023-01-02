import React, { Component } from 'react';
import FormInput from './FormInput';

class FormProjects extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h2 className='text-3xl mb-4'>Projects</h2>
                {this.props.projects.map((project) => {
                        return (
                            <div className='grid grid-cols-2' key={project.id} id={project.id}>
                                <FormInput update={this.props.updateProjects} 
                                           label='Project Name' 
                                           name='project' 
                                           id={project.id} 
                                           placeholder='CV Maker' />
                                <FormInput update={this.props.updateProjects} 
                                           label='Tech Stack' 
                                           name='tech' 
                                           id={project.id} 
                                           placeholder='React, JavaScript, TailwindCSS' />
                                <div className='mb-4 col-span-2 w-full'>
                                    <label className='block w-full'>App URL</label>
                                    <input onInput={this.props.updateProjects} name='link' id={project.id} placeholder='https://jdplumst.github.io/cv-project/' className='p-2 w-full'></input>
                                </div>
                                {project.descriptions.map((description, index) => {
                                    index++;
                                    return (
                                        <div key={description.id} className='w-full col-span-2'>
                                            <label className='block'>Job Description {index}</label>
                                            <textarea onInput={this.props.updateProjects} name='description' id={project.id} data-descriptionid={description.id} className='w-full p-2'></textarea>
                                            <div id={project.id} data-descriptionid={description.id} className='w-full flex'>
                                                <button onClick={this.props.deleteProjectDescription} className='bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 ml-auto'>Delete Description</button>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button onClick={this.props.addProjectDescription} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 mr-auto'>Add Description</button>
                                <span></span>
                                <hr className='border-black mb-4'></hr>
                                <hr className='border-black mb-4'></hr>
                                <span></span>
                                <button onClick={this.props.deleteProject} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 ml-auto'>Delete Project</button>
                                <hr className='border-black mb-4'></hr>
                                <hr className='border-black mb-4'></hr>
                            </div>
                        )
                    })}
                    <button onClick={this.props.addProject} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-48 mr-auto'>Add Project</button>
                    <hr className='border-black mb-4 border-2'></hr>
            </div>
        )
    };
}

export default FormProjects;