/* this is a class component */

class PricesTable extends React.Component {

	render() {

        return (<div className='row'>
            <h3>BitCoin Rate Table</h3>
            <table className='table table-bordered'>
                <thead className='thead-light'>
                    <tr>
                        <th style={{textAlign:'left'}} className='' scope='col'><small>Component</small><br/>Currency</th>
                        <th className='' scope='col'>Picker</th>
                        <th className='' scope='col'>Code</th>
                        <th className='' scope='col'>Symbol</th>
                        <th className='' scope='col'>Rate</th>
                        <th style={{textAlign:'right'}} className='' scope='col'>Conversion</th>
                    </tr>
                </thead>
                {this.props.children}
            </table>
            <style jsx>{`
        	`}</style>
		</div>);
	}
}

export default PricesTable;