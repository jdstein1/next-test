const names = {
    day: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
    month: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
}

const prettyString = (x) => {
    x = x.toString().length < 2 ? '0'+x.toString() : x.toString();
    return x;
}

const TimeUnit = (props) => {
    // console.log('TimeUnit: ', names[units[time]]);
    const {time, units} = props

    if (!units) {
        return null;
    }
    if ( units === 'month' || units === 'day') {
        return (<span className='card-text form-control text-center' type='text'>{ names[units][time] }</span>)
    } else {
        return (<span className='card-text form-control text-center' type='text'>{ prettyString(time) }</span>)
    }

}

class TimeCard extends React.Component {

    timeUnit = (props) => {
        const {time, units} = props
        if (!units) {
            return null;
        }
        if ( units === 'month' || units === 'day') {
            return (<span className='card-text form-control text-center' type='text'>{ names[units][time] }</span>)
        } else {
            return (<span className='card-text form-control text-center' type='text'>{ prettyString(time) }</span>)
        }
    }

    render() {

        // console.log('TimeCard this.props: ',this.props);
        const {units, time} = this.props

        return (
            <div className='card'>
                <div className='card-body'>
                    {/* <TimeUnit units={units} time={time} /> */}
                    {this.timeUnit({units, time})}
                    <h6 className='card-title text-center'>{units}</h6>
                </div>
                <style jsx>{`
                `}</style>
            </div>
        );
	}
}

export default TimeCard;