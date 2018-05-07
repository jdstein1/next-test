class TimerInput extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('TimerInput props: ',props);
    }

	render() {

        return (
            <div className='timer'>
                <div className='card'>
                    <div className='card-body text-center'>
                        <h3 className='card-title'>{this.props.units}</h3>
                        <input className='form-control text-center' type='text' value={ this.props.time } readOnly />
                    </div>
                </div>
                <style jsx>{`
                .timer .card {
                    // background:#eef;
                    margin:0.25rem;
                }
                `}</style>
            </div>
        );
	}
}

export default TimerInput;