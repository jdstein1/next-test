import PropTypes from 'prop-types';

import Label from './Label';
import Button from './Button';

// TODO -- optimize BinaryInput
// * extract into a new component
class BinaryInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // labelBinary:''
            labelBinary: (props.attrs.selected===0||props.attrs.selected!=false) ? 'True' : 'False'
        }
    }

    changeBinary(e) {
        // console.log('START changeBinary: ', e.target.id);
        // console.dir(e.target);
        if (e.target.parentElement.parentElement.children.length === 1) {
            // console.log('ONE CHILD!');
            this.setState({
                labelBinary: e.target.checked ? 'True' : 'False'
            })
        }
    }
    
    render() {
        const { type, attrs, children, hint } = this.props;
        const { 
            value, 
            id, 
            selected,
            flavor
         } = attrs;
        // console.log('RENDER attrs: ', attrs);
        return (
            <React.Fragment>
                <legend>{children}</legend>
                { hint &&
                    <div><small class="form-text text-muted">{hint}</small></div>
                }
                <small><code>({id})</code></small>
                <div className='binary-group'>
                    { value.map((val, i) => {
                        return <div className='form-check' key={i}>
                            <input className='form-check-input' 
                                defaultChecked={(selected===0||selected!=false) && selected===i} 
                                onChange={this.changeBinary.bind(this)} 
                                type={type} 
                                name={id} 
                                id={id+'-'+i} />
                            <Label className='form-check-label' htmlFor={id+'-'+i} text={val ? val : this.state.labelBinary }></Label>
                        </div>
                    }) }
                </div>
            </React.Fragment>
        )
    }
}

// TODO -- optimize ButtonInput
// * extract into a new component
function ButtonInput(props) {
    // an input element with type 'button', 'submit', or 'reset'
    return (<input className={`form-control btn btn-${props.attrs.flavor || 'primary'}`} type={props.type} name={props.attrs.id} id={props.attrs.id} defaultValue={props.attrs.value && props.attrs.value} />)

}

// TODO -- optimize ButtonGroup
// * extract into a new component
// * change attrs props to accept an array of buttons, NOT just an array of values:
// ** attrs = { [{ attrs_for_button_1 }, { attrs_for_button_2 }, { attrs_for_button_3 }] 
// ** attrs_for_button_1 = { value:value-string_or_number, id:id-string, flavor:flavor-string, action:action-function }
function ButtonGroup(props) {
    // array of button elements created with a single component invocation
    return (
        <div className='form-group input-group'>
            { props.attrs.value.map((val, i) => {
                // * input elements
                // return (<ButtonInput key={i} type='button' attrs={{
                //     flavor:props.attrs.flavor,
                //     value: val,
                //     id: props.attrs.id
                // }}>{val}</ButtonInput>)
                // * button elements
                return (
                    <Button key={i} attrs={{
                        flavor: Array.isArray(props.attrs.flavor) ? props.attrs.flavor[i] : props.attrs.flavor,
                        value: [val],
                        id: props.attrs.id
                    }}>{val}</Button>
                )
            }) }
        </div>
    )
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

        const { type, attrs, children, hint } = this.props;
        // const { value, name, id } = this.props.attrs;
        // console.log(type+': ',this.props);

        // TODO: Remove logic from render method
        return (
            <React.Fragment>
            {/* <fieldset className='form-group'> */}
                { (type === 'button' || type === 'reset' || type === 'submit') ?
                    <ButtonInput type={type} attrs={attrs}>{children}</ButtonInput>
                    : null
                }
                { type === 'button-group' &&
                    <ButtonGroup attrs={attrs}></ButtonGroup>
                }
                { type === 'textarea' &&
                    <Label text={children}>
                        <textarea className='form-control' name={attrs.id} id={attrs.id} cols='30' rows='10' defaultValue={attrs.value} onChange={this.changeHandler.bind(this)}></textarea>
                        { hint &&
                            <div><small class="form-text text-muted">{hint}</small></div>
                        }
                    </Label>
                }
                { type === 'select' &&
                    <Label text={children}>
                        <select className='form-control' name={attrs.id} id={attrs.id} onChange={this.changeHandler.bind(this)}>
                            <option>choose...</option>
                            { attrs.value.map((val, i) => {
                                return <option key={attrs.id+'-'+i} value={val}>{val}</option>
                            }) }
                        </select>
                        { hint &&
                            <div><small class="form-text text-muted">{hint}</small></div>
                        }
                    </Label>
                }
                { (type === 'radio' || type === 'checkbox') ?
                    <BinaryInput type={type} changeHandler={this.changeHandler.bind(this)} attrs={attrs} hint={hint}>{children}</BinaryInput>
                    : null
                }
                { type !== 'button' &&
                    type !== 'button-group' &&
                    type !== 'reset' &&
                    type !== 'submit' &&
                    type !== 'checkbox' &&
                    type !== 'radio' &&
                    type !== 'textarea' &&
                    type !== 'select' &&
                    <Label text={children}>
                        <input className='form-control' type={type} defaultValue={attrs.value && attrs.value[0]} onChange={this.changeHandler.bind(this)} placeholder={`${type?type:'undefined'} input`} />
                        { hint &&
                            <div><small class="form-text text-muted">{hint}</small></div>
                        }
                    </Label>
                }
                <style jsx global>{`
                    .form-group {
                        position:relative;
                    }
                    .sticker {
                        background: transparent;
                        color:#999;
                        font-weight:normal;
                        font-size: 11px;
                        font-family: monospace;
                        padding:0;
                        text-shadow:1px 1px 0 white, -1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white;
                        position:absolute;
                        // top:1.45em;
                        top:-0.75em;
                        left:0.5rem;
                    }
                    .binary-group {
                        border: 1px solid #ced4da;
                        padding: 0.375rem 0.75rem;
                        border-radius: 0.4rem;
                        margin-bottom: .5rem;
                        display: block;
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
    type: PropTypes.string.isRequired, // required
    hint: PropTypes.string,
    attrs: PropTypes.shape({
        value: PropTypes.array.isRequired, // required
        id: PropTypes.string.isRequired, // required
        selected: PropTypes.number,
        flavor:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ])
    }),

};

export default Input;