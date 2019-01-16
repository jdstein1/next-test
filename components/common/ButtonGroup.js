import PropTypes from 'prop-types';

// import Label from './Label';
import Button from './Button';

// TODO -- optimize ButtonGroup
// [X] * extract into a new component
// [X] * change items props to accept an array of buttons, NOT just an array of values:
// [X] ** items = { [{ button_1 }, { button_2 }, { button_3 }] 
// [_] ** button_1 = { value:value-string_or_number, id:id-string, flavor:flavor-string, action:action-function }

class ButtonGroup extends React.Component {

    clickHandler(e) {
        // console.log(e.target.value);
    }

    render() {

        const { items, label } = this.props;
        // const { value, name, id } = this.props.items;
        // console.log(type+': ',this.props);
        // console.log('ButtonGroup -- this.props: ',this.props);

        // TODO: add better default for flavor

        return (
            <React.Fragment>
            <fieldset className='form-group'>
                <legend>{label}</legend>
                <div className='input-group'>
                    { items.map((item, i) => {
                        return (
                            <Button 
                                key={ i } 
                                type='button-group'
                                label={item.value}
                                item={item}
                            />
                        )
                    }) }
                </div>
            </fieldset>
            </React.Fragment>
        );
	}
}

ButtonGroup.propTypes = {
    type: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
    // items: PropTypes.shape({
    //     value: PropTypes.array,
    //     id: PropTypes.string,
    //     selected: PropTypes.number
    // })
};

export default ButtonGroup;
