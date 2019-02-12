import PropTypes from 'prop-types';
// import Button from './Button';

class ButtonGroup extends React.PureComponent {

    render() {

        const { children, legend, settings } = this.props;
        // console.log('children: ', children);
        
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { block:true })
          );
      
        let classButtonGroup = '';

        if (settings) {
            classButtonGroup = settings.inline ? 'btn-group' : 'input-group';
        }

        return (
            <fieldset className='form-group'>
                {legend && <legend>{legend}</legend>}
                <div className={ classButtonGroup }>
                    {childrenWithProps}
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
