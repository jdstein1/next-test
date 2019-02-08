import PropTypes from 'prop-types';
// import Button from './Button';

class ButtonGroup extends React.PureComponent {

    render() {

        const { children, legend, settings={} } = this.props;

        let classButtonGroup = '';

        if (settings) {
            classButtonGroup = settings.inline ? 'btn-group' : 'input-group';
        }

        return (
            <fieldset className='form-group'>
                {legend && <legend>{legend}</legend>}
                <div className={ classButtonGroup }>
                    {children}
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
