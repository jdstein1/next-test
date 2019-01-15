import PropTypes from 'prop-types';

class Label extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('Label props: ',props);
    }

	render() {
        return (
            <label htmlFor={this.props.htmlFor}>
                <span>{this.props.text}</span>
                {this.props.children}
                <style jsx>{`
                `}</style>
            </label>
        );
	}
}

Label.propTypes = {};

export default Label;