import PropTypes from 'prop-types';

class Jumbotron extends React.Component {
	
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	}
    // }

    // clickHandler(e) {
    //     console.log(e.target.value);
        
    // }

    render() {

        const {
            title = 'Default Title', 
            children = (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum praesentium ipsam id qui dicta doloremque dolor minus laborum assumenda dolorum laboriosam nemo provident, vitae voluptates sint, est neque explicabo porro!</p>)
         } = this.props;

        return (
            <div className="jumbotron">
                <h1 className="jumbotron-title">{title}</h1>
                <div className="jumbotron-content">{children}</div>
                <style jsx>{`
                    .jumbotron {
                        // background-color: rgba(0,0,255,0.125);
                    }
                    .jumbotron-title {
                        // color: rgba(0,127,0,0.75);
                    }
                    .jumbotron-content {
                        // color: rgba(255,0,0,0.75);
                    }
                `}</style>
            </div>
        );
	}
}

Jumbotron.propTypes = {
    title: PropTypes.string
};

export default Jumbotron;