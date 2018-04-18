class PrettyRate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            meta: {name:'Display Pretty Rate Value',component:'PrettyRate'}
        }
    }

    componentWillMount() {
        // console.log(this.state.meta.name+' -- componentWillMount: ',this.props)
    }

    componentDidMount() {
        // console.log(this.state.meta.name+' -- componentDidMount: ',this.props)
    }

	render() {

		// console.log(this.state.meta.name+' -- render: ',this.props)

		return (<h2>
            <pre>
                {/* <strong>{this.props.rate}</strong> */}
                <strong>{this.props.rate.slice(0,this.props.rate.length-4)}</strong>
                <span >{this.props.rate.slice(this.props.rate.length-4,this.props.rate.length-2)}</span>
                <span className='thousandths'>{this.props.rate.slice(this.props.rate.length-2,this.props.rate.length)}</span>
            </pre>
            <style jsx>{`
			`}</style>
        </h2>);
	}
}

export default PrettyRate;