import React, { Component } from 'react';

class FormPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Personal Information</h2>
                <label className='mr-5'>Name</label>
                <input onInput={this.props.updateName} className='p-2'></input>
            </div>
        )
    }
}

export default FormPersonalInfo;