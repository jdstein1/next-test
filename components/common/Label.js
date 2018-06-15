import PropTypes from 'prop-types';

class Label extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('Label props: ',props);
    }

	render() {

        // const { value, name, id } = this.props.attrs;
        // console.log(value);

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