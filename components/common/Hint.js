import React from 'react';

// TODO: create defaults for input types:
// * input hint
// * validation pattern
// * validation/error/success messaging
// ** global 'empty' message for required fields
// ** pattern validation match messaging based on input type
// ** API error messaging
// ** API success messaging

const inputMessaging = {
    global: {
        empty: 'This field cannot be empty',
        required: 'This field is required',
        optional: 'This field is optional'
    },
    text: {
        hint:'Enter text',
        pattern:'([a-zA-Z])+',
        invalid:'Not a valid text',
        valid:'',
    },
    textarea: {
        hint:'Enter text',
        pattern:'([a-zA-Z])+',
        invalid:'Not a valid text',
        valid:'',
    },
    number: {
        hint:'Numbers only',
        pattern:'([0-9])+([.,][0-9]*)*',
        invalid:'Not a valid number',
        valid:'',
    },
    search: {
        hint:'',
        pattern:'([a-zA-Z])+',
        invalid:'Not a valid search',
        valid:'',
    },
    email: {
        hint:'',
        pattern:'[a-zA-Z0-9]+@([a-zA-Z0-9].[a-zA-Z])+',
        extra:'[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?',
        invalid:'Not a valid email',
        valid:'',
    },
    password: {
        hint:'Passwords must have at least 16 characters, but not more than 64 characters, and included at least one chracter from each group: [A-Z], [a-z], [0-9], [~!@#$%^*()_]',
        pattern:'[a-zA-Z0-9~!@#$%^*()_]{16,64}',
        extra:'([a-z]{1,}[A-Z]{1,}[0-9]{1,}[~!@#$%^*()_]{1,}){16,64}', // doesn't work as intended
        invalid:'Not a valid password',
        valid:'',
    },
    radio: {
        hint:'Select one',
        pattern:'[a-zA-Z]',
        invalid:'Not a valid radio',
        valid:'',
    },
    checkbox: {
        hint:'Select one or more',
        pattern:'[a-zA-Z]',
        invalid:'Not a valid checkbox',
        valid:'',
    },
    select: {
        hint:'Select one',
        pattern:'[a-zA-Z]',
        invalid:'Not a valid select',
        valid:'',
    },
    selectmultiple: {
        hint:'To select more than one, press \'Command\' or \'Ctrl\' key',
        pattern:'[a-zA-Z]',
        invalid:'Not a valid selectmultiple',
        valid:'',
    }
}

const Hint = ( props ) => {

    const { hintType } = props

    if (!hintType) return null;

    const hint = inputMessaging[hintType] && inputMessaging[hintType].hint;

    if (!hint) return null;

    return (<div><small className="form-text text-muted">Hint: {hint}</small></div>);

}

export default Hint;
