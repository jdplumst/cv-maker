import React, { Component } from 'react';
import FormPersonalInfo from './FormPersonalInfo';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='flex justify-center'>
                <div className='container m-10 bg-gray-100 shadow-lg p-10'>
                    <FormPersonalInfo updatePersonalInfo={this.props.updatePersonalInfo} />
                </div>
            </div>
        )
    }
}

export default Form;