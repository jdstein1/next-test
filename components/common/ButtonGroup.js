import PropTypes from 'prop-types';
import Button from './Button';

class ButtonGroup extends React.Component {

    clickHandler(e) {
        console.log(e.target.value);
    }

    render() {

        const { type, items, label } = this.props;

        return (
            <fieldset className='form-group'>
                <legend>{label}</legend>
                <div className='input-group'>
                    <Button 
                        type={type}
                        items={items}
                    />
                </div>
            </fieldset>
        );
	}
}

ButtonGroup.propTypes = {
    type: PropTypes.string,
    items: PropTypes.array
};

export default ButtonGroup;
