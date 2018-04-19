import PrettyRate from './PrettyRate';
import ConversionRate from './ConversionRate';

class PricesStatic extends React.Component {
	state = {
		meta: {name:'Static Currency Picker',component:'PricesStatic'},
		currencies: ['USD','EUR','GBP'],
		currency: 'GBP'
	}

	render() {
		// console.log(this.state.meta.name+' -- render this.props.bpi[this.state.currency]: ');
		// console.dir(this.props.bpi[this.state.currency]);
		
		let currencyOptions = this.state.currencies.map(currency => {
			return <option key={currency} value={currency}>{currency}</option>
		});	

		return (<tbody className='table-primary'>
			<tr>
				<td>
					<small>{this.state.meta.name}</small><br/>
					{this.props.bpi[this.state.currency].description}
				</td>
				<td style={{textAlign:'center'}}>
					{/* <label htmlFor='selectCurrency'>{this.state.currency}</label> */}
					<select 
						className='form-control' 
						name='selectCurrency'
						defaultValue={this.state.currency} 
						onChange={e => this.setState({currency: e.target.value})}
						>
						{currencyOptions}
					</select>
				</td>
				<td style={{textAlign:'center'}}>
					<span className='badge badge-primary'>{this.props.bpi[this.state.currency].code}</span>
				</td>
				<td style={{textAlign:'center'}}>
                    <strong dangerouslySetInnerHTML={{__html:this.props.bpi[this.state.currency].symbol}}></strong>
					{/* <strong dangerouslySetInnerHTML={ this.symb ? {__html:this.symb} : 'N/A' }></strong> */}
					{/* <strong dangerouslySetInnerHTML={ this.symb ? {__html:this.symb} : 'N/A' }></strong> */}
				</td>
				<td style={{textAlign:'right'}}>
					<PrettyRate rate={this.props.bpi[this.state.currency].rate} />
				</td>
				<td style={{textAlign:'right'}}>
					<ConversionRate 
						comp={this.props.bpi[this.state.currency]} 
						base={this.props.bpi['USD']} 
					/>
				</td>
			</tr>
			<style jsx>{`
			`}</style>
		</tbody>);
	}
}

export default PricesStatic;