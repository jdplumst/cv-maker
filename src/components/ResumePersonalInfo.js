import React, { Component } from 'react';

class ResumePersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='h-screen'>
                <h2 className='text-center text-3xl mb-4 h-36'>{this.props.personalInfo.name}</h2>
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