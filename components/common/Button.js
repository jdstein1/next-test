import PropTypes from 'prop-types';

class Button extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
    }
    
    clickHandler(e) {
        console.log(e.target.value);
    }
    
    render() {

        const { type, item } = this.props;
        const { value='', id='', label='', flavor='primary' } = item;

        // TODO: add better default for flavor

        return (
            <React.Fragment>
                <button 
                    type={type}
                    className={`form-control btn btn-${flavor}`} 
                    name={id} 
                    id={id} 
                    defaultValue={value} 
                    onClick={this.clickHandler.bind(this)}
                >
                    {label}
                </button>
                <style jsx>{`
                `}</style>
            </React.Fragment>
        );
	}
}

Button.propTypes = {
    type: PropTypes.string,
    item: PropTypes.object,
    // item: PropTypes.shape({
    //     flavor: PropTypes.string,
    //     label: PropTypes.string,
    //     value: PropTypes.string,
    //     id: PropTypes.string,
    //     selected: PropTypes.number
    // })
};

export default Button;
