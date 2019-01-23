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

        const { type, items } = this.props;
        if (!items) return null;

        return (
            <React.Fragment>
                { items && items.map( (item, i) => {
                    const { flavor, id, value, label } = item;
                    return (
                        <button 
                            key={i}
                            type={type}
                            className={`form-control btn btn-${flavor || 'primary'}`} 
                            name={id} 
                            id={id} 
                            defaultValue={value} 
                            onClick={this.clickHandler.bind(this)}
                        >
                            {label}
                        </button>
                    )
                })}
                <style jsx>{`
                `}</style>
            </React.Fragment>
        );
	}
}

Button.propTypes = {
    type: PropTypes.string,
    items: PropTypes.array
};

export default Button;
