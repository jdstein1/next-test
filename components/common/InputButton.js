import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';


const InputButton = (props) => {

    const { items } = props;

    if ( !items || items.length < 1 ) {
        return null;
    }
    
    const { flavor='primary', id, value, label, type='button' } = items[0];
    
    if (type === 'submit' || type === 'reset') {
        return (<input className={ `form-control btn btn-${ flavor }` } type={ type } name={ id } id={ id } defaultValue={ label || value } />)
        
    } else if (type==='button-group') {
        return (<ButtonGroup type={ type } items={ items } />)

    } else {
        return (<Button type={ type } items={ items } />)

    }

}

export default InputButton;
