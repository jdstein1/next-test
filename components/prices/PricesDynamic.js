import PrettyRate from './PrettyRate';
import ConversionRate from './ConversionRate';

class PricesDynamic extends React.Component {

    constructor( props ) {
        super( props )
        this.state = {
            meta: {name:'Dynamic Currency Picker',component:'PricesDynamic'},
            chosenIndex: 0,
            TLC: 'USD',
            converted: {},
            prettyRate: ''
        };
        console.log(this.state.meta.name+' constructor props: ')
        console.dir(props)
    }

    async getNewCurrency(newTLC) {
        console.log('START getNewCurrency');
        
        // console.log('newTLC: ', newTLC)
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/'+ newTLC +'.json')
        const glob = await res.json()
        // console.log('glob: ',glob.bpi[newTLC])
        
        this.setState({
            converted: glob.bpi[newTLC],
            TLC: newTLC,
            prettyRate: glob.bpi[newTLC].rate
        })
    }

    componentDidMount() {
        // putting this in componentDidMount prevents rand from being generated 2x
        let rand = Math.floor((Math.random() * this.props.currencies.length))
        // console.log(rand)
        this.setState({
            chosenIndex: rand,
            TLC: this.props.currencies[rand].currency
        }, () => {
            this.getNewCurrency(this.state.TLC)
        })
    }
    
    changeCurrency( e ) {
        this.setState({
            chosenIndex: e.target.value,
            TLC: this.props.currencies[this.state.chosenIndex].currency
        }, () => {
            // console.log('changeCurrency this.state.converted: ',this.state.converted)
            console.log('changeCurrency: ',this.props.currencies[this.state.chosenIndex].currency);
            
            this.getNewCurrency(this.props.currencies[this.state.chosenIndex].currency)
        })
    }

	render() {

		const currencyOptions = this.props.currencies.map((currency, index) => {
            // console.log(currency)
            return <option key={index} value={index}>
                {currency.currency}
                {/* {currency.country} ({currency.currency}) */}
            </option>
		})

		console.log('this.props.bpi: ',this.props.bpi)

        return (<tbody className='table-secondary'>
            <tr>
                <td>
                    <small>{this.state.meta.name}</small><br/>
                    {this.props.currencies[this.state.chosenIndex].country}
                </td>
                <td style={{textAlign:'center'}}>
                    <select 
                        className='form-control' 
                        value={this.state.chosenIndex}
                        onChange={this.changeCurrency.bind(this)}
                    >
                        <option value="">choose...</option>
                        {currencyOptions}
                    </select>
                </td>
                <td style={{textAlign:'center'}}>
                    <span className='badge badge-primary'>{this.state.converted.code}</span>
                </td>
                <td style={{textAlign:'center'}}>
                    {/* <strong dangerouslySetInnerHTML={{__html:this.state.converted.symbol}}></strong> */}
                    { this.state.converted.symbol ? this.state.converted.symbol : 'N/A' }
                    {/* <strong dangerouslySetInnerHTML={ this.state.converted.symbol ? {__html:this.state.converted.symbol} : 'N/A' }></strong> */}
                </td>
                <td style={{textAlign:'right'}}>
                    {/* <PrettyRate rate={'34,567.8912'} /> */}
                    <PrettyRate rate={this.state.prettyRate} />
                </td>
                <td style={{textAlign:'right'}}>
                    <ConversionRate 
                        rate={this.state.converted.rate_float} 
                        comp={this.state.converted.code} 
                        base={'USD'} 
                    />
                </td>
            </tr>
			<style jsx>{`
			`}</style>
        </tbody>)
	}
}

PricesDynamic.propTypes = {

}

export default PricesDynamic;