import React from 'react';

import Button from './Button';


const InputButton = (props) => {

    const { type='button', items } = props;

    if (!items) {
        return null;
    }
    
    const { flavor='primary', id, value, label } = items[0];
    
    if (type === 'submit' || type === 'reset') {
        return (<input className={ `form-control btn btn-${ flavor }` } type={ type } name={ id } id={ id } defaultValue={ label || value } />)
        
    } else {
        return (<Button type={ type } items={ items } />)

    }

}

export default InputButton;
