import React, { Component } from 'react';

class FormEducation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className='text-3xl mb-4'>Education</h2>
                <div className='grid grid-cols-2'></div>
            </div>
        )
    }
}

export default FormEducation;