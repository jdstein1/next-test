
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
                    <small style={{float:'right', textAlign:'right'}}>
                        <code>group_id: {id}</code><br />
                        <code>selected_id: {binaryId}</code>
                    </small>
                }
                <style jsx>{`
                    legend {
                        width: auto;
                        border: none;
                        // border-top: 2px solid #ced4da;
                        // background-color: #f8f8f8;
                        // padding: 0.375rem 0.75rem;
                        // margin-left: -0.5rem;
                        // border-radius: 0.25rem;
                    }
                    .binary-group {
                        border: none;
                        // border-bottom: 1px solid #ced4da;
                        // background-color: #fff;
                        // padding: 0.375rem 0.75rem;
                        // border-radius: 0.25rem;
                        margin: 0;
                        // display: block;
                    }
                    .form-check {}
                    .form-check-input {}
                    .form-check-label {}
                `}</style>
            </fieldset>
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
    //     flavor:PropTypes.oneOfType([
    //         PropTypes.string,
    //         PropTypes.array
    //     ])
    // })
};

export default InputBinary;