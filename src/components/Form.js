import React, { useState } from 'react';
import FormPersonalInfo from './FormPersonalInfo';
import FormEducation from './FormEducation';
import FormExperience from './FormExperience';
import FormProjects from './FormProjects';
import FormSkills from './FormSkills';

function Form(props) {
    return (
        <div className='flex justify-center'>
            <div className='container m-10 bg-gray-100 shadow-lg p-5 h-fit overflow-auto'>
                <FormPersonalInfo updatePersonalInfo={props.updatePersonalInfo} />
                <FormEducation education={props.education} 
                               updateEducation={props.updateEducation} 
                               addEducation={props.addEducation}
                               deleteEducation={props.deleteEducation} />
                <FormExperience experience={props.experience}
                                updateExperience={props.updateExperience}
                                addExperience={props.addExperience}
                                deleteExperience={props.deleteExperience}
                                addExperienceDescription={props.addExperienceDescription}
                                deleteExperienceDescription={props.deleteExperienceDescription} />
                <FormProjects projects={props.projects}
                              updateProjects={props.updateProjects}
                              addProject={props.addProject}
                              deleteProject={props.deleteProject}
                              addProjectDescription={props.addProjectDescription}
                              deleteProjectDescription={props.deleteProjectDescription} />
                <FormSkills updateSkills={props.updateSkills} />
            </div>
        </div>
    )
}

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className='flex justify-center'>
//                 <div className='container m-10 bg-gray-100 shadow-lg p-5 h-fit overflow-auto'>
//                     <FormPersonalInfo updatePersonalInfo={this.props.updatePersonalInfo} />
//                     <FormEducation education={this.props.education} 
//                                    updateEducation={this.props.updateEducation} 
//                                    addEducation={this.props.addEducation}
//                                    deleteEducation={this.props.deleteEducation} />
//                     <FormExperience experience={this.props.experience}
//                                     updateExperience={this.props.updateExperience}
//                                     addExperience={this.props.addExperience}
//                                     deleteExperience={this.props.deleteExperience}
//                                     addExperienceDescription={this.props.addExperienceDescription}
//                                     deleteExperienceDescription={this.props.deleteExperienceDescription} />
//                     <FormProjects projects={this.props.projects}
//                                   updateProjects={this.props.updateProjects}
//                                   addProject={this.props.addProject}
//                                   deleteProject={this.props.deleteProject}
//                                   addProjectDescription={this.props.addProjectDescription}
//                                   deleteProjectDescription={this.props.deleteProjectDescription} />
//                     <FormSkills updateSkills={this.props.updateSkills} />
//                 </div>
//             </div>
//         )
//     }
// }

export default Form;