import PropTypes from 'prop-types';

class Button extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('Button props: ',props);
    }

    clickHandler(e) {
        // console.log(e.target.value);
        
    }
	render() {

        const { type, attrs, children } = this.props;
        // const { value, name, id } = this.props.attrs;
        // console.log(type+': ',this.props);
        // console.log('Button -- this.props: ',this.props);

        // TODO: add better default for flavor

        return (
            <React.Fragment>
                <button 
                    className={`form-control btn btn-${attrs.flavor || 'primary'}`} 
                    name={attrs.id} 
                    id={attrs.id} 
                    defaultValue={attrs.value} 
                    onClick={this.clickHandler.bind(this)}
                >
                    {children}
                </button>
                <style jsx>{`
                `}</style>
            </React.Fragment>
        );
	}
}

Button.propTypes = {
    type: PropTypes.string,
    attrs: PropTypes.shape({
        value: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired,
        selected: PropTypes.number
    }),

};

export default Button;