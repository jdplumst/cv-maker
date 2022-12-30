import React, { Component } from 'react';

class ResumePersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='h-96'>
                <h2 className='text-center text-3xl'>{this.props.personalInfo.name}</h2>
                <span>{this.props.personalInfo.phone}</span>
                <span>{this.props.personalInfo.email}</span>
            </div>
        )
    }
}

export default ResumePersonalInfo;