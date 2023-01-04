import React from 'react';

function FormInput(props) {
    return (
        <div className='mb-4'>
            <label className='block w-full'>{props.label}</label>
            <input onInput={props.update} name={props.name} id={props.id} placeholder={props.placeholder} className='p-2'></input>
        </div>
    )
}

export default FormInput;