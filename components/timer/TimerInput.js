class TimerInput extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('TimerInput props: ',props);
	}

	render() {

        return (
            <div className=''>
                <div className='card'>
                    <div className='card-body text-center'>
                <h3 className='card-title'>{this.props.units}</h3>
                <input className='form-control text-center' type='text' value={ this.props.time } readOnly />
                    </div>
                </div>
                <style jsx>{`
                `}</style>
            </div>
        );
	}
}

export default TimerInput;