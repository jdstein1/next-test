import PropTypes from 'prop-types';

import Fieldset from './Fieldset';
import Label from './Label';
import Hint from './Hint';
import InputBinary from './InputBinary';
import InputButton from './InputButton';
import ButtonGroup from './ButtonGroup';


class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            currentId: '',
            showPlaceholder: false
		}
    }

    changeHandler = (e) => {
        console.log(e.target.value);
    }

    // TODO: reuse this shell structure for other input render funcs...
    renderInputShell (params) {
        const { legend, type, id, items, settings={} } = params;
        // const { multiple = false } = settings;
        return (<Fieldset legend={ legend }>
            <Hint hintType={type} />
                {
                    /* stuff that is unique to the input */
                }
        </Fieldset>)
    }

    renderSelectOption (params) {
        const { legend, type, id, items, settings={} } = params;
        const { multiple = false } = settings;
        return (<Fieldset legend={ legend }>
            <select className='form-control' name={id} id={id} size={ ( multiple ? items.length + 1 : '' ) } onChange={this.changeHandler} multiple={multiple}>
                <option>choose...</option>
                { items.map((option, i) => {
                    return <option key={i} value={option.value}>{option.value}</option>
                }) }
            </select>
            <Hint hintType={ multiple ? (type+'multiple') : type } />
        </Fieldset>)
    }

    renderTextArea (params) {
        const { legend, type, id, items, settings={} } = params;
        return (<Fieldset legend={ legend }>
            { items.map( (area, i) => {
                // console.log((i+1)+' === '+items.length);
                return (
                    <Label text={area.label} key={i}>
                        <textarea className='form-control' name={id} id={id+'-'+i} cols='30' rows='10' defaultValue={ area.value } onChange={this.changeHandler}></textarea>
                        { (i+1) === items.length && <Hint hintType={type} />}
                    </Label>
                );
            } ) }
        </Fieldset>)
    }

    renderBasicInput (params) {
        const { legend, type, id, items, settings={} } = params;
        // const value = items && items.value || ''
        return (<Fieldset legend={ legend }>
            { items.map( (input, i) => {
                console.log(settings);
                
                return (
                    <Label text={input.label} key={i}>
                        <input className='form-control' type={type} name={id} id={id+'-'+i} defaultValue={ input.value } onChange={this.changeHandler} placeholder={ this.state.showPlaceholder ? `${type?type:'undefined'} input` : null } />
                        { (i+1) === items.length && <Hint hintType={type} /> }
                    </Label>
                );
            } ) }
        </Fieldset>)
    }

    switchOnInputType ( thing ) {
        const { type, items, legend, id, settings={} } = thing;
        if (!items) {
            return null;
        }
        // const {} = items;
        switch (thing.type) {
            case 'submit':
            case 'reset':
            case 'button':
                return (<InputButton type={type} label={ legend } items={items} />);

            case 'button-group':
                return (<ButtonGroup type={type} label={ legend } items={items} settings={settings} />);

            case 'textarea':
                return this.renderTextArea({type, items, legend, id, settings});

            case 'select':
            case 'selectmulti':
                return this.renderSelectOption({type, items, legend, id, settings});

            case 'radio':
            case 'checkbox':
                return (<InputBinary type={type} id={id} label={ legend } changeHandler={this.changeHandler} items={items}>
                    <Hint hintType={type} />
                </InputBinary>);

            default:
                return this.renderBasicInput({type, items, legend, id, settings});
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

        const { type, items, legend, id, settings } = this.props;

        if ( !items ) {
            return null;
        // } else {
            // this.checkPrimitiveType(items);
        }

        return (
            <React.Fragment>
                { this.switchOnInputType({type, items, legend, id, settings}) }
                <style jsx>{`
                    // :global(.sticker) {
                    //     background: transparent;
                    //     color:#999;
                    //     font-weight:normal;
                    //     font-size: 11px;
                    //     font-family: monospace;
                    //     padding:0;
                    //     text-shadow:1px 1px 0 white, -1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white;
                    //     position:absolute;
                    //     top:-0.75em;
                    //     left:0.5rem;
                    // }
                    :global(input[type=color]) {
                        -webkit-appearance: none;
                        padding:0.125rem;
                        width:10rem;
                        height:2rem;
                    }
                    :placeholder {
                        color: rgba(0,127,255,0.5);
                    }
                    `}</style>
            </React.Fragment>
        );
	}
}

Input.propTypes = {
    type: PropTypes.oneOf(['','text','number','email','password','color','datetime-local','select','button','button-group','submit','reset','search','textarea','radio','checkbox']),
    legend: PropTypes.string,
    id: PropTypes.string,
    items: PropTypes.array
};

export default Input;
