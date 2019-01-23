import PropTypes from 'prop-types';

const Label = (props) => {
    const { htmlFor, text, children } = props;
    return (
        <label htmlFor={htmlFor}>
            { text && <span>{text}</span> }
            { children }
            <style jsx>{`
            `}</style>
        </label>
    );
}

Label.propTypes = {
    htmlFor: PropTypes.string, 
    text: PropTypes.string
};

export default Label;