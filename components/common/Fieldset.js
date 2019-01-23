import PropTypes from 'prop-types';

const Fieldset = (props) => {
    const { legend, children } = props;
    return (
        <fieldset className='form-group'>
            { legend && <legend>{ legend }</legend>}
            { children && children }
            <style jsx>{`
            `}</style>
        </fieldset>
    );
}

Fieldset.propTypes = {
    legend: PropTypes.string
};

export default Fieldset;