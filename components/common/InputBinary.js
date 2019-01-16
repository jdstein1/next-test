
import PropTypes from 'prop-types';

import Label from './Label';

class InputBinary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            binaryLabel: 'False'
        }
    }

    componentDidMount() {
        let binaryId;
        for (let index = 0; index < this.props.items.length; index++) {
            // binaryId
            const element = this.props.items[index];
            console.log(element.selected);
            if (element.selected) {
                this.setState({
                    binaryId: this.props.id +'-'+ (index+1)
                // }, () => {
                //     console.log(this.state);
                })
            }
        }
    }

    changeBinary(e) {

        // console.log('START changeBinary: ', e.target.id +' / '+ e.target.checked);
        // console.dir(e.target);
        console.dir(e.target.id);

        if (this.props.items.length === 1) {
            this.setState({
                binaryLabel: e.target.checked ? 'True' : 'False'
            // }, () => {
            //     console.log(this.state);
            })
        } else {

        }

        this.setState({
            binaryId: e.target.checked ? e.target.id : null
        // }, () => {
        //     console.log('this.state: ',this.state);
        })

    }

    render() {

        const { id, type, items, label, hint } = this.props;
        const { binaryId } = this.state;
        // console.log('this.props: ', this.props);

        return (
            <React.Fragment>
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
                                    onChange={ this.changeBinary.bind(this) } 
                                    type={type} 
                                    name={id} 
                                    id={id+'-'+(i+1)} />
                                <Label className='form-check-label' htmlFor={id+'-'+(i+1)} text={item.value ? item.value : this.state.binaryLabel }></Label>
                            </div>
                        })
                    }
                </div>
                { id &&
                    <small className='meta'>
                        <code>group_id: {id}</code><br />
                        <code>selected_id: {binaryId}</code>
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
            </React.Fragment>
        )
    }
}

InputBinary.propTypes = {
    type: PropTypes.string,
    hint: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
    // items: PropTypes.shape({
    //     value: PropTypes.array,
    //     id: PropTypes.string,
    //     selected: PropTypes.number,
    //     flavor: PropTypes.string
    // })
};

export default InputBinary;
