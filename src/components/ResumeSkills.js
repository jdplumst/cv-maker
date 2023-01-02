import React, { Component } from 'react';

class ResumeSkills extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h3 className='text-2xl mt-4'>Skills</h3>
                <hr className='border-black mb-4'></hr>
                <p><strong>Langauges: </strong>{this.props.skills.languages}</p>
                <p><strong>Libraries and Frameworks: </strong>{this.props.skills.libraries}</p>
                <p><strong>Developer Tools: </strong>{this.props.skills.devtools}</p>
            </div>
        )
    };
}

export default ResumeSkills;