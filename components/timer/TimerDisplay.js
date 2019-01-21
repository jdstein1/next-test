import TimeCard from './TimeCard';

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
                // console.groupEnd()
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
            // console.groupEnd()
        })
    }

	render() {

        const { thenISO, nowISO, now, then } = this.state;

        console.log('thenISO: ', thenISO);
        console.log('nowISO: ', nowISO);
        const timeDiff = then - now;
        
        

        const timeFields = Object.keys(this.state.time)
            .reverse()
            .filter( (key) => {
                // filter out milliseconds
                return key !== 'ms'
            } )
            .map( (key,i) => {
                // console.log('time['+key+']: ', this.state.time[key]);
                return <TimeCard key={i} units={key} time={this.state.time[key]} />
            })

		return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-12'>
                        <fieldset className='my-3 form-group'>
                            {/* <label className='text-center'>Then: */}
                                <input className='text-center form-control' type='datetime-local' defaultValue={thenISO} onChange={this.changeThen.bind(this)} />
                            {/* </label> */}
                        </fieldset>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <h4 className='text-center'>{timeDiff < 0 ? 'was' : 'is'}</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 clock'>
                        <div className='d-flex flex-row flex-wrap justify-content-center align-content-center align-items-center'>
                            {timeFields}
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <h4 className='text-center'>{timeDiff < 0 ? 'ago' : 'from now'}</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <fieldset className='my-3 form-group'>
                            {/* <label className='text-center'>Now: */}
                                <input className='text-center form-control' type='datetime-local' defaultValue={nowISO} readOnly />
                            {/* </label> */}
                        </fieldset>
                    </div>
                </div>
            </React.Fragment>
        );
	}
}

export default TimerDisplay;