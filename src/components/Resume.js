import React from 'react';
import ResumePersonalInfo from './ResumePersonalInfo';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeSkills from './ResumeSkills';

function Resume(props) {
    return (
        <div className='flex justify-center w-1/2'>
            <div className='container m-10 bg-gray-100 shadow-lg p-5 h-fit w-5/6 overflow-auto'>
                <ResumePersonalInfo personalInfo={props.personalInfo} />
                <ResumeEducation education={props.education} />
                <ResumeExperience experience={props.experience} />
                <ResumeProjects projects={props.projects} />
                <ResumeSkills skills={props.skills} />
            </div>
        </div>
    )
}

export default Resume;