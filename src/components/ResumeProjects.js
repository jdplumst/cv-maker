import React from "react";

function ResumeProjects(props) {
    return (
        <div>
            <h3 className='text-2xl mt-4'>Projects</h3>
            <hr className='border-black mb-4'></hr>
            {props.projects.map((project) => {
                    return (
                        <div key={project.id}>
                            <div className='grid grid-cols-2'>
                                <span><strong>{project.project}</strong> | <em>{project.tech}</em></span>
                                <span className='text-right'>{project.link}</span>
                            </div>
                            <ul className="mb-4 list-disc list-inside">
                            {project.descriptions.map((description) => {
                                return (
                                    <li key={description.id}>{description.description}</li>
                                )
                            })}
                            </ul>
                        </div>
                    )
                })}
        </div>
    )
}

export default ResumeProjects;