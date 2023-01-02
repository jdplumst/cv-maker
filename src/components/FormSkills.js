import React, { Component } from 'react';

class FormSkills extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h2 className='text-3xl mb-4'>Personal Information</h2>
                <label className='block'>Languages</label>
                <textarea onInput={this.props.updateSkills} 
                          name='languages' 
                          placeholder='JavaScript, HTML, CSS, Python, C, C++, Bash' 
                          className='w-full p-2'></textarea>
                <label className='block'>Libraries and Frameworks</label>
                <textarea onInput={this.props.updateSkills} 
                          name='libraries' 
                          placeholder='React, TailwindCSS, Sass, Node.js, Express' 
                          className='w-full p-2'></textarea>
                <label className='block'>Developer Tools</label>
                <textarea onInput={this.props.updateSkills} 
                          name='devtools' 
                          placeholder='Git/GitHub, Linux, VS Code, Jira, Postman, Insomnia, SQL Server, Oracle DB' 
                          className='w-full p-2'></textarea>
            </div>
        )
    };
}

export default FormSkills;