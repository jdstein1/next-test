import PropTypes from 'prop-types';

const Label = (props) => {
    const { htmlFor, text, children, inline=false } = props;
    const classLabel = `mb-2 ${ inline ? 'd-inline-block' : 'd-block' }`;
    return (
        <label htmlFor={ htmlFor } className={classLabel}>
            { text && <span>{ text }</span> }
            { children }
            <style jsx>{`
            `}</style>
        </label>
    );
}

Label.propTypes = {
    htmlFor: PropTypes.string, 
    text: PropTypes.string,
    inline: PropTypes.bool
};

export default Label;