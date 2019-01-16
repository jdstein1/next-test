import PropTypes from 'prop-types';

import Label from './Label';
import Button from './Button';
import InputBinary from './InputBinary';
import InputButton from './InputButton';
import ButtonGroup from './ButtonGroup';


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

    renderSwitch( thing ) {
        if ( Array.isArray( thing ) ) {
            console.log('it is an array');
        } else {
            console.log('it is NOT array')
            if ( Object.prototype.toString.call( thing ) === '[object Object]' ) {
                console.log('it is an object')
            }
        }
    }

	render() {

        const { type, items, label, hint, id } = this.props;

        console.group('items: ', items.length);
        console.log(items);
        this.renderSwitch(items)
        console.groupEnd();

        let item = [];

        if ( items < 1 ) {
            return null;
        } else {
            if ( items.length === 1 ) {
                item = items[0];
            } else if ( items.length > 1 ) {
                item = items;
            }
        }

        // TODO: Remove conditional rendering logic from render method
        // TODO: Use ButtonGroup component when "items" is an array of more than 1
        return (
            <React.Fragment>
                { (type === 'button' || type === 'reset' || type === 'submit') &&
                    <InputButton type={type} item={item}>{label}</InputButton>
                }
                { type === 'button-group' &&
                    <ButtonGroup type={type} label={label} items={items}></ButtonGroup>
                }
                { type === 'textarea' &&
                    <Label text={label}>
                        <textarea className='form-control' name={id} id={id} cols='30' rows='10' defaultValue={item.value} onChange={this.changeHandler.bind(this)}></textarea>
                        { hint &&
                            <div><small className="form-text text-muted">{hint}</small></div>
                        }
                    </Label>
                }
                { type === 'select' &&
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
                        <Label text={label}>
                            <input className='form-control' type={type} defaultValue={item.value} onChange={this.changeHandler.bind(this)} placeholder={`${type?type:'undefined'} input`} />
                            { hint &&
                                <div><small className="form-text text-muted">{hint}</small></div>
                            }
                        </Label>
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
    label: PropTypes.string,
    hint: PropTypes.string,
    items: PropTypes.oneOfType(
        PropTypes.array,
        PropTypes.object
        ).isRequired
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
