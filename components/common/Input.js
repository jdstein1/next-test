import PropTypes from 'prop-types';

import Label from './Label';

function BinaryInput(props) {
    return (<React.Fragment>
        <legend>{props.children}</legend>
        <div className='binary-group'>
            { props.attrs.value.map((val, i) => {
                return <div className='form-check' key={i}>
                    <input className='form-check-input' type={props.type} name={props.attrs.id} id={props.attrs.id+'-'+i} value={val} checked={props.attrs.selected===i} />
                    <Label className='form-check-label' htmlFor={props.attrs.id+'-'+i} text={val}></Label>
                </div>
            }) }
        </div>
    </React.Fragment>)
}

function ButtonInput(props) {
    return (<input className={`form-control btn btn-${props.attrs.flavor}`} type={props.type} name={props.attrs.id} id={props.attrs.id} defaultValue={props.attrs.value} />)

}

class Input extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('Input props: ',props);
    }

    changeHandler(e) {
        console.log(e.target.value);
        
    }

	render() {

        const { type, attrs, children } = this.props;
        // const { value, name, id } = this.props.attrs;
        // console.log(type+': ',this.props);

        return (
            <fieldset className='form-group'>
                <p className='sticker'>{type} input</p>
                { (type === 'button' || type === 'reset' || type === 'submit') ?
                    <ButtonInput type={type} attrs={attrs}>{children}</ButtonInput>
                    : null
                }
                { type === 'textarea' &&
                    <Label text={children}>
                        <textarea className='form-control' name={attrs.id} id={attrs.id} cols='30' rows='10' defaultValue={attrs.value} onChange={this.changeHandler.bind(this)}></textarea>
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
                    </Label>
                }
                { (type === 'radio' || type === 'checkbox') ?
                    <BinaryInput type={type} attrs={attrs}>{children}</BinaryInput>
                    : null
                }
                { type !== 'button' &&
                    type !== 'reset' &&
                    type !== 'submit' &&
                    type !== 'checkbox' &&
                    type !== 'radio' &&
                    type !== 'textarea' &&
                    type !== 'select' &&
                    <Label text={children}>
                        <input className='form-control' type={type} defaultValue={attrs.value[0]} onChange={this.changeHandler.bind(this)} />
                    </Label>
                }
                <style jsx global>{`
                    .form-group {
                        position:relative;
                    }
                    .sticker {
                        background: transparent;
                        color:#099;
                        font-weight:bold;
                        font-size: 11px;
                        font-family: monospace;
                        padding:0 1em;
                        text-shadow:1px 1px 0 white, -1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white;
                        position:absolute;
                        top:1.45em;
                    }
                    .binary-group {
                        border: 1px solid #ced4da;
                        padding: 0.375rem 0.75rem;
                        border-radius: 0.4rem;
                        margin-bottom: .5rem;
                        display: block;
                    }
                `}</style>
            </fieldset>
        );
	}
}

Input.propTypes = {
    type: PropTypes.string,
    attrs: PropTypes.shape({
        value: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired,
        selected: PropTypes.number
    }),

};

export default Input;