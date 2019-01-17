import React from 'react';

import Button from './Button';

// TODO -- optimize InputButton

// function InputButton(props) {
//     const { type='button', item } = props;
//     const { flavor='primary', id, value='' } = item;
//     // an input element with type 'button', 'submit', or 'reset'
//     return (<input className={`form-control btn btn-${ flavor || 'primary' }`} type={type} name={id} id={id} defaultValue={value} />)
// }



// TODO -- optimize InputButton

const InputButton = (props) => {
    const { type='button', item, children } = props;
    if (!item) {
        return null;
    }
    
    const { flavor='primary', id, value, label } = item;
    
    if (type === 'submit' || type === 'reset') {
        return (<input className={`form-control btn btn-${ flavor || 'primary' }`} type={type} name={id} id={id} defaultValue={label} />)
        
    } else {
        return (<Button type={type} items={items} />)

    }

}

export default InputButton;