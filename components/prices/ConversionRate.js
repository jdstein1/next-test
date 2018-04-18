class ConversionRate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            meta: {name:'Currency Conversion Rate',component:'ConversionRate'},
            conversion: '',
            rate: props.rate,
            comp: props.comp,
            base: props.base
        }
        // console.group(this.state.meta.name+' constructor: ')
        // console.dir(this.state)
        // console.dir(props)
        // console.groupEnd()
    }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/'+ this.state.base +'.json').then( res => {
            return res.json();
        }).then( data => {
            console.log('data.res: ', data.res);
            
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            rate: nextProps.rate,
            comp: nextProps.comp,
            base: nextProps.base
        }, () => {
            //  console.log('$$$$$$$$$$$$$$$$$: ',this.state);
            // console.group(this.state.meta.name+' constructor: ')
            // console.dir(this.state)
            // console.dir(this.props)
            // console.groupEnd()
        });
    }

    async getBaseCurrency(base) {
        
        console.log('START getBaseCurrency');
        // console.log('base: ', base)
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/'+ base +'.json')
        const glob = await res.json()
        console.log('getBaseCurrency glob: ',glob.bpi[base])

    }

    render() {

        // this.baseRate = this.getBaseCurrency(this.state.base)
		// console.log('this.baseRate: ', this.baseRate)

		// console.log(this.state.meta.name+' -- render: ',this.props)

		return (<span>
            {/* {this.state.conversion} */}
            {(this.state.rate/this.state.rate) +' '+ this.state.comp}
            {/* {(Math.round((this.props.bpi[this.props.comp].rate_float/this.props.bpi[this.props.base].rate_float)*10000))/10000} {this.props.bpi[this.props.comp].code} */}
            {' / '}
            {<small>1 {this.state.base}</small>}
        <style jsx>{`
			`}</style>
        </span>);
	}
}

export default ConversionRate;