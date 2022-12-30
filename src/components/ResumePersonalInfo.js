import React, { Component } from 'react';

class ResumePersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Make sure container is correct height
        let h2;
        if (this.props.personalInfo.firstname === '' && this.props.personalInfo.lastname === '') {
            h2 = <h2 className='text-center text-3xl mb-4 h-36'></h2>
        } else {
            h2 = <h2 className='text-center text-3xl mb-4'>{this.props.personalInfo.firstname} {this.props.personalInfo.lastname}</h2>
        }
        return (
            <div>
                {h2}
                <div className='grid grid-flow-col divide-x divide-zinc-900 text-center'>
                    <span className='pr-2'>{this.props.personalInfo.phone}</span>
                    <span className='px-2'>{this.props.personalInfo.email}</span>
                    <span className='px-2'>{this.props.personalInfo.linkedin}</span>
                    <span className='pl-2'>{this.props.personalInfo.github}</span>
                </div>
            </div>
        )
    }
}

export default ResumePersonalInfo;