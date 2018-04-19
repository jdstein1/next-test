import PrettyRate from './PrettyRate';
import ConversionRate from './ConversionRate';

class PricesDynamic extends React.Component {

    constructor( props ) {
        super( props )
        this.state = {
            meta: {name:'Dynamic Currency Picker',component:'PricesDynamic'},
            chosenIndex: 0,
            TLC: 'USD',
            bpi: props.bpi
        };
        console.clear()
        console.log(this.state.meta.name+' constructor: ')
        console.log('---- props: ', props)
        console.log('---- this.state: ', this.state)

    }

    async getNewCurrency(newTLC) {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/'+ newTLC +'.json')
        const glob = await res.json()
        console.log('**** glob: ',glob.bpi)

        this.setState({
            bpi: glob.bpi,
            TLC: newTLC
        })
    }

    componentDidMount() {
        // putting this in componentDidMount prevents rand from being generated 2x
        let rand = Math.floor((Math.random() * this.props.currencies.length))
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
            // console.log('changeCurrency this.state.bpi: ',this.state.bpi)
            // console.log('changeCurrency: ',this.props.currencies[this.state.chosenIndex].currency);
            
            this.getNewCurrency(this.props.currencies[this.state.chosenIndex].currency)
        })
    }

	render() {

		const currencyOptions = this.props.currencies.map((currency, index) => {
            return <option key={index} value={index}>
                {currency.currency}
            </option>
        })

        const myComp = this.state.bpi;
        // get the country codes
        const keysComp = Object.keys(myComp)
        
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
                    <span className='badge badge-primary'>{myComp[keysComp[1]].code}</span>
                </td>
                <td style={{textAlign:'center'}}>
                    { myComp[keysComp[1]].symbol &&
                        <strong dangerouslySetInnerHTML={{__html:myComp[keysComp[1]].symbol}}></strong>
                    }
                    { !myComp[keysComp[1]].symbol &&
                        'N/A'
                    }
                    {/* { this.state.bpi[this.state.TLC].symbol ? this.state.bpi[this.state.TLC].symbol : 'N/A' } */}
                    {/* <strong dangerouslySetInnerHTML={ this.state.bpi[this.state.TLC].symbol ? {__html:this.state.bpi[this.state.TLC].symbol} : 'N/A' }></strong> */}
                </td>
                <td style={{textAlign:'right'}}>
                    {/* <PrettyRate rate={'34,567.8912'} /> */}
                    <PrettyRate rate={myComp[keysComp[1]].rate} />
                </td>
                <td style={{textAlign:'right'}}>
                    <ConversionRate 
                        comp={myComp[keysComp[1]]} 
                        base={myComp[keysComp[0]]} 
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