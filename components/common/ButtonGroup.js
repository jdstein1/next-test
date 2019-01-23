import PropTypes from 'prop-types';
import Button from './Button';

class ButtonGroup extends React.Component {

    clickHandler(e) {
        console.log(e.target.value);
    }

    render() {

        const { type, items, label, size, settings={} } = this.props;

        let groupStyle = '';
        if (settings) {
            groupStyle = settings.inline ? 'btn-group' : 'input-group';
        }

        return (
            <fieldset className='form-group'>
                <legend>{label}</legend>
                <div className={ groupStyle }>
                    <Button 
                        type={type}
                        items={items}
                        size={size}
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
