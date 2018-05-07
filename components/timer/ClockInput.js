class ClockInput extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('ClockInput props: ',props);
    }

    prettyString(x) {
        x = x.toString().length < 2 ? '0'+x.toString() : x.toString();
        return x;
    }

	render() {

        const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

        return (
            <div className='card'>
                <div className='card-body'>
                    <h6 className='card-title text-center'>{this.props.units}</h6>
                    { this.props.units === 'month' &&
                        <span className='card-text form-control text-center' type='text'>{ months[this.props.time] }</span>
                    }
                    { this.props.units === 'day' &&
                        <span className='card-text form-control text-center' type='text'>{ days[this.props.time] }</span>
                    }
                    { (this.props.units !== 'month') && (this.props.units !== 'day') &&
                        <span className='card-text form-control text-center' type='text'>{ this.prettyString(this.props.time) }</span>
                    }
                </div>
                <style jsx>{`
                `}</style>
            </div>
        );
	}
}

export default ClockInput;