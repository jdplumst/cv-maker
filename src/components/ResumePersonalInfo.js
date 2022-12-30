import React, { Component } from 'react';

class ResumePersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>{this.props.personalInfo.name}</h2>
            </div>
        )
    }
}

export default ResumePersonalInfo;