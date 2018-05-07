import ClockInput from './ClockInput';

export default class ClockDisplay extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            myNotifyColors: { background: '#0E1717', text: '#eee' },
            now: new Date(),
            time: {},
            timer: null,
            counter: 0
		}
		// console.log('ClockDisplay props: ',props);
		// console.log('ClockDisplay this.state: ',this.state);
	}

    componentWillMount() {
        this.setState({
            nowISO: this.state.now.toISOString().slice(0, -1),
        }, () => {
            // console.log('ClockDisplay this.state: ',this.state);
        })
    }

    componentDidMount() {
        this.updateClock()
        let timer = setInterval(this.tick, 1000);
        this.setState({timer}, () => {

        })
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer)
    }

    tick() {
        // console.log('START tick');
        
        this.setState({
            counter: this.state.counter+1
        }, () => {
            console.log('counter: ', this.state.counter);
            
        });
    }

    updateClock() {
        const now = this.state.now;
        // console.group('START updateElapsed');
        this.setState({
            time: {
                day: now.getDay(),
                month: now.getMonth(),
                date: now.getDate(),
                year: now.getFullYear(),
                hour: now.getHours(),
                minute: now.getMinutes(),
                seconds: now.getSeconds(),
                ms: now.getMilliseconds(),

            }
        }, () => {
            // console.log('this.state.time.years: ',this.state.time.years);
            console.groupEnd()
        })
    }

	render() {

        const timeFields = Object.keys(this.state.time)
            .filter( (key) => {
                // filter out milliseconds
                return key !== 'ms'
            } )
            .map( (key,i) => {
                console.log('time['+key+']: ', this.state.time[key]);
                // console.log(this.state.time[key].toString().length);
                return <ClockInput key={ i } units={ key } time={ this.state.time[key] } />
            })

        return (
            <div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Clock</h3>
                        {/* {this.state.timer} */}
                    </div>
                </div>
                <div>COUNTER: { this.state.counter }</div>
                <div className='row'>
                    <div className='col-12 d-flex flex-row flex-this.state.nowrap justify-content-stretch align-content-center align-items-stretch'>
                        {timeFields}
                    </div>
                </div>
                <style jsx>{`
                `}</style>
            </div>
        );
	}
}
