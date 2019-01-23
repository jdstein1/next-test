
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
        const binarySelected = this.state.binarySelected;

        for (let index = 0; index < this.props.items.length; index++) {
            const element = this.props.items[index];
            // console.log(element.selected);
            if (element.selected) {
                const newItemId = this.props.id +'-'+ (index+1);
                this.setState({
                    binarySelected: binarySelected.concat(newItemId)
                // }, () => {
                //     console.log('this.state.binarySelected: ',this.state.binarySelected);
                })
            }
        }
    }

    changeBinary = (e) => {

        // for input groups of one element, change the label based on checked state
        const binaryLabel = this.props.items.length === 1 ? (e.target.checked ? 'True' : 'False') : '';
        const binarySelected = this.state.binarySelected;
        const index = binarySelected.indexOf(e.target.id);

        // clear array if type===radio
        if (this.props.type === 'radio') {
            binarySelected.splice(0, binarySelected.length)
        }

        if ( index < 0 && e.target.checked ) {
            // if not already in array, push to array
            binarySelected.push(e.target.id);
        } else {
            // if already in array, pop from array
            binarySelected.splice(index, 1);
        }

        this.setState({
            binaryLabel,
            binarySelected
        })

    }

    render() {

        const { id, type, items, label, children } = this.props;
        const { binarySelected } = this.state;
        // console.log('this.props: ', this.props);

        return (
            <fieldset className='form-group'>
                { label &&
                    <legend>{label}</legend>
                }
                <div className='binary-group'>
                    { children }
                    { items &&
                        items.map((item, i) => {
                            return <div className='form-check' key={i}>
                                <input className='form-check-input' 
                                    defaultChecked={ item.selected } 
                                    onChange={ this.changeBinary } 
                                    type={type} 
                                    name={id} 
                                    id={id+'-'+(i+1)} />
                                <Label className='form-check-label' htmlFor={id+'-'+(i+1)} text={item.value ? item.value : (item.label ? item.label : this.state.binaryLabel) } />
                            </div>
                        })
                    }
                </div>
                { id &&
                    <small className='meta'>
                        <code>group_id: {id}</code><br />
                        <code>selected_id(s): {JSON.stringify(binarySelected)}</code>
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
