import PropTypes from 'prop-types';

class Fieldset extends React.Component {

    // constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	}
	// 	// console.log('Fieldset props: ',props);
    // }

	render() {
        const { legend, children } = this.props;
        return (
            <fieldset className='form-group'>
                <legend>{ legend }</legend>
                { children }
                <style jsx>{`
                `}</style>
            </fieldset>
        );
	}
}

Fieldset.propTypes = {};

export default Fieldset;