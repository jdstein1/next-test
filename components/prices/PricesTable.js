/* this is a class component */

class PricesTable extends React.Component {

    constructor(props){
        super(props)
        this.state = ({
            display: 'PricesStatic'
        })
    }

    changeDisplay(e) {
        // console.log('START changeDisplay')
        this.setState({
            display: e.target.value
        }, () => {
            // this.toggleDisplay()
        })
    }

    toggleDisplay() {
        // console.log('START toggleDisplay')
        // console.log('this.state.display: ',this.state.display)
    }

	render() {

        // console.log('PricesTable state: ',this.state)
        // console.log('PricesTable props.children: ',this.props.children)

        const bpiTableReference = React.Children.map( this.props.children, child => {
            // return child;
            return child.type.name === 'PricesReference' ? child : null
        } )
        // console.log('bpiTableChildren: ',bpiTableChildren)

        const bpiTableChildren = React.Children.map( this.props.children, child => {
            // return child;
            return child.type.name !== 'PricesReference' ? child : null
        } )
        // console.log('bpiTableChildren: ',bpiTableChildren)

        const bpiTableOptions = React.Children.map( bpiTableChildren, child => {
            // return child;
            return <option value={child.type.name}>{child.type.name}</option>
        } )
        // console.log('bpiTableOptions: ',bpiTableOptions)

        const bpiCurrentChild = bpiTableChildren.filter( (child) => {
            // return child;
            return this.state.display === child.type.name
        })
        // console.log('bpiCurrentChild: ',bpiCurrentChild)

        return (
            <div>
                <div className='row d-flex justify-content-between'>
                    <h3 className=''>Compare currencies</h3>
                    <form className='form-inline' style={{float:'right'}}>
                        <select name='table-type' id='table-type' className='form-control' defaultValue={this.state.display} onChange={ this.changeDisplay.bind(this) }>
                            <option value=''>choose...</option>
                            {/* {bpiOptions} */}
                            {bpiTableOptions}
                        </select>
                        {/* <input className='form-control' type='text' defaultValue={this.state.display} readOnly /> */}
                    </form>
                </div>
                <div className='row'>
                    <table className='table table-bordered table-striped'>
                        <thead className='thead-light'>
                            <tr>
                                <th style={{textAlign:'left'}} className='' scope='col'>Currency</th>
                                <th className='' scope='col'>Picker</th>
                                <th className='' scope='col'>Code</th>
                                <th className='' scope='col'>Symbol</th>
                                <th className='' scope='col'>Rate</th>
                                <th className='' scope='col'>Conversion</th>
                            </tr>
                        </thead>
                        {bpiTableReference}
                        {/* {this.props.children} */}
                        {bpiCurrentChild}
                    </table>
                </div>
                <style jsx>{`
                `}</style>
            </div>
        )
	}
}

export default PricesTable;