class TimerInput extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('TimerInput props: ',props);
    }

	render() {

        return (
            <div className='card'>
                <div className='card-body'>
                    <h6 className='card-title text-center'>{this.props.units}</h6>
                    {/* <input className='card-text form-control text-center' type='text' value={ this.props.time } readOnly /> */}
                    <span className='card-text form-control text-center'>{ this.props.time }</span>
                </div>
                <style jsx>{`
                `}</style>
            </div>
        );
	}
}

export default TimerInput;