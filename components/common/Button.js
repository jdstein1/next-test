import PropTypes from 'prop-types';

class Button extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
    }
    
    render() {

        const { type='button', label='Button', flavor='primary', onClick, id='0', value='0', block=false } = this.props;

        return (
            <button 
                type={type}
                className={`btn btn-${flavor || 'primary'}${block?' btn-block mb-2':' mb-2 mr-2'}`} 
                name={id} 
                id={id} 
                defaultValue={value} 
                onClick={onClick}
            >
                {label}
                <style jsx>{`
                `}</style>
            </button>
        );
	}
}

Button.propTypes = {
    type: PropTypes.string,
    block: PropTypes.bool
};

export default Button;
