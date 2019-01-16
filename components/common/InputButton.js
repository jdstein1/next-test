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
    const { type='button', item } = props;
    // const { flavor='primary', id, value, label } = item;
    // an input element with type 'button', 'submit', or 'reset'
    if (!item) {
        return null;
    }

    return (<Button type={type} item={item} />)
    // return (<input className={`form-control btn btn-${ flavor || 'primary' }`} type={type} name={id} id={id} defaultValue={label} />)

}

export default InputButton;