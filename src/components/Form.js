import React from 'react';
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

export default Form;