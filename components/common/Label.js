import PropTypes from 'prop-types';

const Label = (props) => {
    const { htmlFor, text, children } = props;
    return (
        <label htmlFor={htmlFor}>
            <span>{text}</span>
            {children}
            <style jsx>{`
            `}</style>
        </label>
    );
}

Label.propTypes = {};

export default Label;