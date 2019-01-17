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

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            currentId: ''
		}
    }

    changeHandler(e) {
        console.log(e.target.value);
        // console.dir(e.target);
        // const target = e.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        // this.setState({
        //   [name]: value
        // });
    }

    renderTextArea (params) {
        return (<fieldset className='form-group'>
            <Label text={params.label}>
                <textarea className='form-control' name={params.id} id={params.id} cols='30' rows='10' defaultValue={params.value} onChange={this.changeHandler.bind(this)}></textarea>
                { params.hint &&
                    <div><small className="form-text text-muted">{params.hint}</small></div>
                }
            </Label>
        </fieldset>)
    }

    switchOnInputType ( thing ) {
        const {type, item, label, legend} = thing;
        const {} = item;
        switch (thing.type) {
            case 'submit':
            case 'reset':
            case 'button':
                return (<InputButton type={type} item={item}>{label}</InputButton>);

            case 'textarea':
                return this.renderTextArea();

            case 'select':
                return (<fieldset className='form-group'>
                    <Label text={label}>
                        <select className='form-control' name={id} id={id} onChange={this.changeHandler.bind(this)}>
                            <option>choose...</option>
                            { items.map((item, i) => {
                                return <option key={item.id+'-'+i} value={item.value}>{item.value}</option>
                            }) }
                        </select>
                        { hint &&
                            <div><small className="form-text text-muted">{hint}</small></div>
                        }
                    </Label>
                </fieldset>);

            default:
                return (<fieldset className='form-group'>
                    <Label text={label}>
                        <input className='form-control' type={type} defaultValue={item.value} onChange={this.changeHandler.bind(this)} placeholder={`${type?type:'undefined'} input`} />
                        { hint &&
                            <div><small className="form-text text-muted">{hint}</small></div>
                        }
                    </Label>
                </fieldset>);
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

        const { type, item = {}, items = [], value, label, hint, id } = this.props;
        
        if ( !items && !item ) {
            // nothing
            return null;
        } else if (items && !item) {
            // items array
            this.checkPrimitiveType(items);
            // return null;
        } else if (!items && item) {
            // item object
            this.checkPrimitiveType(item);
            // return null;
        } else {
            // both
            // return null;
        }

        // let item = [];

        // if ( items.length ) {
        //     console.group('items array: ', items.length);
        //     // console.log(items);
        //     // this.renderSwitch(items)
        //     console.groupEnd();
        //     if ( items.length === 1 ) {
        //         item = items[0];
        //     } else if ( items.length > 1 ) {
        //         item = items;
        //     }
        // } else {
        //     console.group('items keys: ', Object.keys(items).length);
        //     // console.log(items);
        //     // this.renderSwitch(items)
        //     console.groupEnd();
        // }

        // TODO: Remove conditional rendering logic from render method
        // TODO: Use ButtonGroup component when "items" is an array of more than 1
        return (
            <React.Fragment>
                { (type === 'button' || type === 'reset' || type === 'submit') &&
                    // <InputButton type={type} item={item}>{label}</InputButton>
                    <Button type={type} item={item} />
                }
                { type === 'button-group' &&
                    <ButtonGroup type={type} label={label} items={items} />
                }
                { type === 'textarea' &&
                    this.renderTextArea({item, label, id, value})
                }
                { type === 'select' &&
                    <fieldset className='form-group'>
                        <Label text={label}>
                            <select className='form-control' name={id} id={id} onChange={this.changeHandler.bind(this)}>
                                <option>choose...</option>
                                { items.map((item, i) => {
                                    return <option key={item.id+'-'+i} value={item.value}>{item.value}</option>
                                }) }
                            </select>
                            { hint &&
                                <div><small className="form-text text-muted">{hint}</small></div>
                            }
                        </Label>
                    </fieldset>
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
                        <fieldset className='form-group'>
                            <Label text={label}>
                                <input className='form-control' type={type} defaultValue={item.value} onChange={this.changeHandler.bind(this)} placeholder={`${type?type:'undefined'} input`} />
                                { hint &&
                                    <div><small className="form-text text-muted">{hint}</small></div>
                                }
                            </Label>
                        </fieldset>
                }
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
    type: PropTypes.string, // one of: ['text','number','email','password','select','button','submit','reset','search','textarea','radio','checkbox']
    value: PropTypes.string,
    label: PropTypes.string,
    hint: PropTypes.string,
    items: PropTypes.array,
    item: PropTypes.object,
    // items: PropTypes.shape([{
    //     value: PropTypes.array,
    //     id: PropTypes.string,
    //     selected: PropTypes.number,
    //     flavor: PropTypes.oneOfType([
    //         PropTypes.string,
    //         PropTypes.array
    //     ])
    // }])
};

export default Input;
