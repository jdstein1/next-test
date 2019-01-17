
import PropTypes from 'prop-types';

import Label from './Label';

class InputBinary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            binaryLabel: 'False',
            binarySelected: []
        }
    }

    componentDidMount() {
        const selectedArr = this.state.binarySelected;

        for (let index = 0; index < this.props.items.length; index++) {
            const element = this.props.items[index];
            // console.log(element.selected);
            if (element.selected) {
                const newItemId = this.props.id +'-'+ (index+1);
                this.setState({
                    binarySelected: selectedArr.concat(newItemId)
                // }, () => {
                //     console.log('this.state.binarySelected: ',this.state.binarySelected);
                })
            }
        }
    }

    changeBinary = (e) => {

        // console.group('START changeBinary: ', e.target.id);
        // console.log(e.target.checked);
        // console.log(this.props.type);
        // console.dir(e.target.parentNode.parentNode);

        // for input groups of one element, change the label based on checked state
        const binaryLabel = this.props.items.length === 1 ? (e.target.checked ? 'True' : 'False') : '';

        // TODO:
        // [X] add slected item to array
        // [X] remove un-selected item from array
        // [X] remove previously-selected item from array (for radios)
        const selectedArr = this.state.binarySelected;
        // console.log('selectedArr before: ',selectedArr);
        
        const index = selectedArr.indexOf(e.target.id);
        // console.log('index: ',index);

        if (this.props.type === 'radio') {
            selectedArr.splice(0, selectedArr.length)
        }

        if ( index < 0 && e.target.checked ) {
            // if not already in array, push to array
            selectedArr.push(e.target.id);
        } else {
            // if already in array, pop from array
            selectedArr.splice(index, 1);
        }

        // console.groupEnd();

        this.setState({
            binaryLabel,
            binarySelected: selectedArr
        // }, () => {
        //     console.log('this.state.binarySelected: ',this.state.binarySelected);
        })

    }

    render() {

        const { id, type, items, label, hint } = this.props;
        const { binarySelected } = this.state;
        // console.log('this.props: ', this.props);

        return (
            <fieldset className='form-group'>
                { label &&
                    <legend>{label}</legend>
                }
                <div className='binary-group'>
                    { hint &&
                        <small className="form-text text-muted">Hint: {hint}</small>
                    }
                    { items &&
                        items.map((item, i) => {
                            return <div className='form-check' key={i}>
                                <input className='form-check-input' 
                                    defaultChecked={ item.selected } 
                                    onChange={ this.changeBinary } 
                                    type={type} 
                                    name={id} 
                                    id={id+'-'+(i+1)} />
                                <Label className='form-check-label' htmlFor={id+'-'+(i+1)} text={item.value ? item.value : (item.label ? item.label : this.state.binaryLabel) }></Label>
                            </div>
                        })
                    }
                </div>
                { id &&
                    <small className='meta'>
                        <code>group_id: {id}</code><br />
                        <code>selected_id: {JSON.stringify(binarySelected)}</code>
                    </small>
                }
                <style jsx>{`
                    legend {
                        width: auto;
                        border: none;
                    }
                    .binary-group {
                        border: none;
                        margin: 0;
                    }
                    .form-check {}
                    .form-check-input {}
                    .form-check-label {}
                    .meta {
                        line-height: 1;
                        float: right;
                        text-align: right;
                    }
                `}</style>
            </fieldset>
        )
    }
}

InputBinary.propTypes = {
    type: PropTypes.string,
    hint: PropTypes.string,
    items: PropTypes.array,
    changeHandler: PropTypes.func
};

export default InputBinary;
