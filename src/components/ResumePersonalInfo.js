import React from 'react';

function ResumePersonalInfo(props) {
    // Make sure container is correct height
    let h2;
    if (props.personalInfo.firstname === '' && props.personalInfo.lastname === '') {
        h2 = <h2 className='text-center text-3xl mb-4 h-36'></h2>
    } else {
        h2 = <h2 className='text-center text-3xl mb-4'>{props.personalInfo.firstname} {props.personalInfo.lastname}</h2>
    }
    return (
        <div>
            {h2}
            <div className='grid grid-flow-col divide-x divide-zinc-900 text-center'>
                <span className='pr-2'>{props.personalInfo.phone}</span>
                <span className='px-2'>{props.personalInfo.email}</span>
                <span className='px-2'>{props.personalInfo.linkedin}</span>
                <span className='pl-2'>{props.personalInfo.github}</span>
            </div>
        </div>
    )
}

export default ResumePersonalInfo;