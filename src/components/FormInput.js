import React, { Component } from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mb-4'>
                <label className='block w-full'>{this.props.label}</label>
                <input onInput={this.props.update} id={this.props.id} placeholder={this.props.placeholder} className='p-2'></input>
            </div>
        )
    }
}

export default FormInput;