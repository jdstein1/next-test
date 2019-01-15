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
        
        console.log('Button -- this.props: ',this.props);

        const { type, item, label } = this.props;
        // const { value, name, id } = item;
        // console.log(type+': ',this.props);
        // console.log('Button -- this.props: ',this.props);

        // TODO: add better default for flavor

        return (
            <React.Fragment>
                <button 
                    type={type}
                    className={`form-control btn btn-${item.flavor || 'primary'}`} 
                    name={item.id} 
                    id={item.id} 
                    defaultValue={item.value} 
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
    item: PropTypes.object
    // item: PropTypes.shape({
    //     flavor: PropTypes.string,
    //     label: PropTypes.string,
    //     value: PropTypes.string,
    //     id: PropTypes.string,
    //     selected: PropTypes.number
    // })
};

export default Button;
