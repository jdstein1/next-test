import PropTypes from 'prop-types';

class Fieldset extends React.Component {

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

Fieldset.propTypes = {
    legend: PropTypes.string
};

export default Fieldset;