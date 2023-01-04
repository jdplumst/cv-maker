import React from 'react';

function ResumeSkills(props) {
    return (
        <div>
            <h3 className='text-2xl mt-4'>Skills</h3>
            <hr className='border-black mb-4'></hr>
            <p><strong>Langauges: </strong>{props.skills.languages}</p>
            <p><strong>Libraries and Frameworks: </strong>{props.skills.libraries}</p>
            <p><strong>Developer Tools: </strong>{props.skills.devtools}</p>
        </div>
    )
}

export default ResumeSkills;