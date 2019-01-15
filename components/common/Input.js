import PropTypes from 'prop-types';

import Label from './Label';
import InputBinary from './InputBinary';
// import Button from './Button';
import ButtonGroup from './ButtonGroup';


// TODO -- optimize ButtonInput
// * extract into a new component
function ButtonInput(props) {
    const { type='button', item } = props;
    const { flavor='primary', id, value='' } = item;
    // an input element with type 'button', 'submit', or 'reset'
    return (<input className={`form-control btn btn-${ flavor || 'primary' }`} type={type} name={id} id={id} defaultValue={value} />)
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

	render() {

        const { type, items, label, hint, id } = this.props;

        let item = {};

        if (items.length === 1) {
            item = items[0];
        }
        // const { value, id, flavor } = items[0];
        // console.log(type+': ',this.props);

        // TODO: Remove logic from render method
        return (
            <React.Fragment>
            {/* <fieldset className='form-group'> */}
                { (type === 'button' || type === 'reset' || type === 'submit') ?
                    <ButtonInput type={type} item={item}>{label}</ButtonInput>
                    : null
                }
                { type === 'button-group' &&
                    <ButtonGroup type={type} items={items}></ButtonGroup>
                }
                { type === 'textarea' &&
                    <fieldset className='form-group'>
                        <Label text={label}>
                            <textarea className='form-control' name={id} id={id} cols='30' rows='10' defaultValue={item.value} onChange={this.changeHandler.bind(this)}></textarea>
                            { hint &&
                                <div><small className="form-text text-muted">{hint}</small></div>
                            }
                        </Label>
                    </fieldset>
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
                { (type === 'radio' || type === 'checkbox') ?
                    <InputBinary type={type} id={id} label={label} changeHandler={this.changeHandler.bind(this)} items={items} hint={hint}>{label}</InputBinary> : null
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
            {/* </fieldset> */}
            </React.Fragment>
        );
	}
}

Input.propTypes = {
    type: PropTypes.string, // one of: ['text','number','email','password','select','button','submit','reset','search','textarea','radio','checkbox']
    hint: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
    // items: PropTypes.shape([{
    //     value: PropTypes.array,
    //     id: PropTypes.string,
    //     selected: PropTypes.number,
    //     flavor:PropTypes.oneOfType([
    //         PropTypes.string,
    //         PropTypes.array
    //     ])
    // }])
};

export default Input;