import TimerInput from './TimerInput';

class TimerDisplay extends React.Component {

    static defaultProps = {
        then: new Date('2042-04-17T14:32:02.724')
    }

    constructor(props) {
		super(props);
		this.state = {
            myNotifyColors: { background: '#0E1717', text: '#eee' },
            now: new Date(),
            then: new Date('2042-04-17T14:32:02.724'),
            time: {}
		}
		// console.log('TimerDisplay props: ',props);
		// console.log('* TimerDisplay this.state: ',this.state);
	}

    componentWillMount() {
        this.setState({
            nowISO: this.state.now.toISOString().slice(0, -1),
            thenISO: this.state.then.toISOString().slice(0, -1)
        }, () => {
            // console.log('*** TimerDisplay this.state: ',this.state);
        })
    }

    componentDidMount() {
        this.updateElapsed()
    }

	changeThen(e) {
        // console.group('START changeThen: ', e.target.value);
        // change the selected project using SELECT/OPTION menu
        this.setState({
            then: new Date(e.target.value)
        }, () => {
            // console.log('this.state.then: ',this.state.then);
            this.setState({
                thenISO: this.state.then.toISOString().slice(0, -1)
            }, () => {
                // console.log('this.state.thenISO: ',this.state.thenISO);
                console.groupEnd()
                this.updateElapsed()
            })
            
        })
    }

    updateElapsed() {
        // console.group('START updateElapsed');
        this.setState({
            time: {

                // console.log('real ms: ', this.state.then - this.state.now)
                ms: (this.state.then - this.state.now)%1000,
                
                // console.log('real seconds: ', ((this.state.then - this.state.now)/1000))
                seconds: Math.floor((this.state.then - this.state.now)/1000)%60,
                
                // console.log('real minutes: ', ((this.state.then - this.state.now)/(1000*60)))
                minutes: Math.floor((this.state.then - this.state.now)/(1000*60))%(60),
                
                // console.log('real hours: ', ((this.state.then - this.state.now)/(1000*60*60)))
                hours: Math.floor((this.state.then - this.state.now)/(1000*60*60))%(24),
                
                // console.log('real days: ', ((this.state.then - this.state.now)/(1000*60*60*24)))
                days: Math.floor((this.state.then - this.state.now)/(1000*60*60*24))%(365),
                
                // console.log('real years: ', (this.state.then - this.state.now)/(1000*60*60*24*365))
                years: Math.floor((this.state.then - this.state.now)/(1000*60*60*24*365))
                
            }
        }, () => {
            // console.log('this.state.time.years: ',this.state.time.years);
            console.groupEnd()
        })
    }

	render() {

        const timeFields = Object.keys(this.state.time)
            .reverse()
            .filter( (key) => {
                // filter out milliseconds
                return key !== 'ms'
            } )
            .map( (key,i) => {
                // console.log('time['+key+']: ', this.state.time[key]);
                return <TimerInput key={i} units={key} time={this.state.time[key]} />
            })

		return (
            <div className='clock'>
                {/* <div className="row">
                    <div className="col-12">
                        <h3>Timer</h3>
                    </div>
                </div> */}
                <div className='row'>
                    <div className='col-12'>
                        <label>
                            Now
                            <input className='form-control' ref='nowInput' type='datetime-local' defaultValue={this.state.nowISO} readOnly />
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <label>
                            Then (edit)
                            <input className='form-control' ref='thenInput' type='datetime-local' defaultValue={this.state.thenISO} onChange={this.changeThen.bind(this)} />
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex flex-row flex-wrap justify-content-center align-content-center align-items-center'>
                        {timeFields}
                    </div>
                </div>
                <style jsx global>{`
                .timer:first-child .card {margin-left:0 !important;}
                .timer:last-child .card {margin-right:0 !important;}
                `}</style>
            </div>
        );
	}
}

export default TimerDisplay;