import React, { Component } from 'react';

class ResumeEducation extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h3 className='text-2xl mt-4'>Education</h3>
                <hr className='border-black mb-4'></hr>
                {this.props.education.map((education) => {
                        return (
                            <div className='grid grid-cols-2 mb-4' key={education.id}>
                                <span><strong>{education.school}</strong></span>
                                <span className='text-right'>{education.start} - {education.end}</span>
                                <span>{education.degree} in {education.major}, Minor in {education.minor}</span>
                                <span className='text-right'>{education.city}, {education.province}</span>
                            </div>
                        )
                    })}
            </div>
        )
    };
}

export default ResumeEducation;