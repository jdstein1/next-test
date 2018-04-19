class ConversionRate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            meta: {name:'Currency Conversion Rate',component:'ConversionRate'},
            comp: props.comp,
            base: props.base
        }
        console.log(this.state.meta.name+' constructor: ')
        console.log('props: ', props)
        console.log('this.state: ', this.state)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            comp: nextProps.comp,
            base: nextProps.base
        });
    }

    render() {
		return (<span>
            {Math.floor((this.state.comp.rate_float/this.state.base.rate_float)*1000)/1000}
            {' '}
            {this.state.comp.code}
            <br/>
            {<small>per 1 {this.state.base.code}</small>}
        <style jsx>{`
			`}</style>
        </span>);
	}
}

export default ConversionRate;