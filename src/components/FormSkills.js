import React from 'react';

function FormSkills(props) {
    return (
        <div>
            <h2 className='text-3xl mb-4'>Personal Information</h2>
            <label className='block'>Languages</label>
            <textarea onInput={props.updateSkills} 
                      name='languages' 
                      placeholder='JavaScript, TypeScript, HTML, CSS' 
                      className='w-full p-2'></textarea>
            <label className='block'>Libraries and Frameworks</label>
            <textarea onInput={props.updateSkills} 
                      name='libraries' 
                      placeholder='React, TailwindCSS, Sass, Node.js, Express' 
                      className='w-full p-2'></textarea>
            <label className='block'>Developer Tools</label>
            <textarea onInput={props.updateSkills} 
                      name='devtools' 
                      placeholder='Git/GitHub, Linux, VS Code, MongoDB' 
                      className='w-full p-2'></textarea>
        </div>
    )
}

export default FormSkills;