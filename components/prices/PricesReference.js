import PrettyRate from './PrettyRate';
import ConversionRate from './ConversionRate';

class PricesReference extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
			meta: {name:'Prices Generic',component:'PricesReference'}
		}
        // console.log('props: ',props)
    }

	render() {

        const currency = this.props.bpi.USD;
		// console.log('currency: ',currency)

        return (<tbody className='table-primary'>
					<tr>
						<td>
							{/* <small>{this.state.meta.name}</small><br/> */}
							{currency.description}
						</td>
						<td style={{textAlign:'center'}}>N/A</td>
						<td style={{textAlign:'center'}}>
							<span className='badge badge-primary'>{currency.code}</span>
						</td>
                        <td style={{textAlign:'center'}}>
							{ currency.symbol ? currency.symbol : 'N/A' }
							{/* <strong dangerouslySetInnerHTML={ currency.symbol ? {__html:currency.symbol} : 'N/A' }></strong> */}
                        </td>
						<td style={{textAlign:'right'}}>
							<ConversionRate 
								comp={currency} 
								base={currency} 
							/>
						</td>
						<td style={{textAlign:'right'}}>
							<PrettyRate rate={currency.rate} />
						</td>
					</tr>
			<style jsx>{`
			`}</style>
		</tbody>)
	}
}

export default PricesReference;