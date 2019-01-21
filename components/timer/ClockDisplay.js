import TimeCard from './TimeCard';

export default class ClockDisplay extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            myNotifyColors: { background: '#0E1717', text: '#eee' },
            now: new Date(),
            timer: null,
            time: {}
        }
        // this.timer = null
		// console.log('ClockDisplay props: ',props);
		// console.log('ClockDisplay this.state: ',this.state);
	}

    componentWillMount() {
        this.setState({
            nowISO: this.state.now.toISOString().slice(0, -1),
        }, () => {
            // console.log('ClockDisplay this.state: ',this.state);
            // console.log('componentWillMount')
            
        })
    }

    componentDidMount() {
        this.updateClock()
        // this.timer = setInterval(this.tick.bind(this), 1000)
        let timer = setInterval(this.tick.bind(this), 1000)
        this.setState({timer}, () => {
            // console.log('componentDidMount')
        })
    }

    componentWillUnmount() {
        // clearInterval(this.timer)
        clearInterval(this.state.timer)
    }

    tick() {
        // console.log('START tick')
        this.setState({
            now: new Date()
        }, () => {
            this.updateClock()
        });
    }

    updateClock() {
        const now = this.state.now;
        // console.group('START updateElapsed')
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
            // console.groupEnd()
        })
    }

	render() {

        const timeFields = Object.keys(this.state.time)
            .filter( (key) => {
                // filter out milliseconds
                return key !== 'ms'
            } )
            .map( (key,i) => {
                // console.log('time['+key+']: ', this.state.time[key]);
                // console.log(this.state.time[key].toString().length);
                return <TimeCard key={ i } units={ key } time={ this.state.time[key] } />
            })

        return (
            <div className='clock'>
                {/* <div className="row">
                    <div className="col-12">
                        <h4 className='text-center'>the time is now</h4>
                    </div>
                </div> */}
                <div className='row'>
                    <div className='col-12 d-flex flex-row flex-wrap justify-content-center align-content-center align-items-center'>
                        {timeFields}
                    </div>
                </div>
                <style jsx>{`
                    // .timer:first-child .card {margin-left:0 !important;}
                    // .timer:last-child .card {margin-right:0 !important;}
                `}</style>
            </div>
        );
	}
}
