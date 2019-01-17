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

        const { type, label, items } = this.props;
        if (!items) return null;
        // const { value='', id='', label='', flavor='primary' } = items;

        console.log('Button -- items: ',items);
        

        // TODO: add better default for flavor

        return (
            <React.Fragment>
                { items && items.map( (item, i) => {
                    return (
                        <button 
                            type={type}
                            className={`form-control btn btn-${item.flavor || 'primary'}`} 
                            name={item.id} 
                            id={item.id} 
                            defaultValue={item.value} 
                            onClick={this.clickHandler.bind(this)}
                        >
                            {item.label}
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
