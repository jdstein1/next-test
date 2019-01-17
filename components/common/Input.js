import PropTypes from 'prop-types';

import Label from './Label';
import Button from './Button';
import InputBinary from './InputBinary';
import InputButton from './InputButton';
import ButtonGroup from './ButtonGroup';

// TODO: create defaults for input types:
// * input hint
// * validation pattern
// * validation/error/success messaging
// ** global 'empty' message for required fields
// ** pattern validation match messaging based on input type
// ** API error messaging
// ** API success messaging

const inputMessaging = {
    text: {hint:'Enter text'},
    number: {hint:'Enter number'},
    search: {hint:'Enter search term(s)'},
    email: {hint:'Enter email address'},
    password: {hint:'Passwords must have 64 characters: 16 of [A-Za-z], 14 of [0-9], and 34 of [~!@#$%^*()_]'},
    radio: {hint:'Select one'},
    checkbox: {hint:'Select one or more'},
    select: {hint:'Select one'},
    selectmulti: {hint:'Select one or more (press \'Command\' key)'},
}

const Hint = (hintType) => {
    if (!hintType) return null;
    const hint = inputMessaging[hintType] && inputMessaging[hintType].hint || '';
    return (<div><small className="form-text text-muted">{hint}</small></div>);
}


class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            currentId: ''
		}
    }

    changeHandler(e) {
        // console.log(e.target.value);
        // console.dir(e.target);
        // const target = e.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        // this.setState({
        //   [name]: value
        // });
    }

    renderSelectOption (params) {
        const { settings={} } = params;
        const {multiple=false} = settings;
        return (<fieldset className='form-group'>
            <Label text={params.label}>
                <select className='form-control' name={params.id} id={params.id} onChange={this.changeHandler.bind(this)} multiple={multiple}>
                    <option>choose...</option>
                    { params.items.map((option, i) => {
                        return <option key={option.id+'-'+i} value={option.value}>{option.value}</option>
                    }) }
                </select>
                <Hint hintType={params.type} />
            </Label>
        </fieldset>)
    }

    renderTextArea (params) {
        const value = params.items && params.items.value || ''
        return (<fieldset className='form-group'>
            <Label text={params.label}>
                <textarea className='form-control' name={params.id} id={params.id} cols='30' rows='10' defaultValue={ value } onChange={this.changeHandler.bind(this)}></textarea>
                <Hint hintType={params.type} />
            </Label>
        </fieldset>)
    }

    renderBasicInput (params) {
        const value = params.items && params.items.value || ''
        return (<fieldset className='form-group'>
            <Label text={params.label}>
                <input className='form-control' type={params.type} defaultValue={ value } onChange={this.changeHandler.bind(this)} placeholder={`${params.type?params.type:'undefined'} input`} />
                <Hint hintType={params.type} />
            </Label>
        </fieldset>)
    }

    switchOnInputType ( thing ) {
        const {type, items, label, id, settings} = thing;
        if (!items) {
            return null;
        }
        // const {} = items;
        switch (thing.type) {
            case 'submit':
            case 'reset':
            case 'button':
                return (<InputButton type={type} items={items}>{label}</InputButton>);

            case 'button-group':
                return (<ButtonGroup type={type} label={label} items={items} />);

            case 'textarea':
                return this.renderTextArea({type, items, label, id, settings});

            case 'select':
                return this.renderSelectOption({type, items, label, id, settings});

            case 'radio':
            case 'checkbox':
                return (<InputBinary type={type} id={id} label={label} changeHandler={this.changeHandler.bind(this)} items={items} hintType={type}>{label}</InputBinary>);

            default:
                return this.renderBasicInput({type, items, label, id, settings});
        }
    }    

    checkPrimitiveType( thing ) {
        console.group('check type...');
        console.dir(thing);
        if ( Array.isArray( thing ) ) {
            console.log('it is an array');
        } else {
            console.log('it is NOT an array')
            if ( Object.prototype.toString.call( thing ) === '[object Object]' ) {
                console.log('it is an object')
            } else {
                console.log('it is NOT an object')
            }
        }
        console.groupEnd();
    }

	render() {

        const { type, items, label, id, settings } = this.props;

        if ( !items ) {
            return null;
        } else {
            // this.checkPrimitiveType(items);
        }

        // TODO: Remove conditional rendering logic from render method
        // TODO: Use ButtonGroup component when "items" is an array of more than 1
        return (
            <React.Fragment>
                {this.switchOnInputType({type, items, label, id, settings})}
                {/* { (type === 'button' || type === 'reset' || type === 'submit') &&
                    // <InputButton type={type} items={items}>{label}</InputButton>
                    <Button type={type} items={items} />
                }
                { type === 'button-group' &&
                    <ButtonGroup type={type} label={label} items={items} />
                }
                { type === 'textarea' &&
                    this.renderTextArea({type, items, label, id})
                }
                { type === 'select' &&
                    this.renderSelectOption({type, items, label, id})
                }
                { (type === 'radio' || type === 'checkbox') &&
                    <InputBinary type={type} id={id} label={label} changeHandler={this.changeHandler.bind(this)} items={items} hint={hint}>{label}</InputBinary>
                }
                { type !== 'button' &&
                type !== 'button-group' &&
                type !== 'reset' &&
                type !== 'submit' &&
                type !== 'checkbox' &&
                type !== 'radio' &&
                type !== 'textarea' &&
                type !== 'select' &&
                    this.renderBasicInput({type, items, label, id})
                } */}
                <style jsx>{`
                    .sticker {
                        background: transparent;
                        color:#999;
                        font-weight:normal;
                        font-size: 11px;
                        font-family: monospace;
                        padding:0;
                        text-shadow:1px 1px 0 white, -1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white;
                        position:absolute;
                        top:-0.75em;
                        left:0.5rem;
                    }
                    input[type=color] {
                        -webkit-appearance: none;
                        padding:0.125rem;
                        width:10rem;
                        height:2rem;
                    }
                `}</style>
            </React.Fragment>
        );
	}
}

Input.propTypes = {
    type: PropTypes.oneOf(['text','number','email','password','color','datetime-local','select','button','button-group','submit','reset','search','textarea','radio','checkbox']),
    label: PropTypes.string,
    id: PropTypes.string,
    items: PropTypes.array
};

export default Input;
