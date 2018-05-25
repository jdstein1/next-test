import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import MessageQueue from '../components/messages/MessageQueue';

class Layout extends Component {

	constructor (props) {
		super(props);
		this.state = {
			activePageIndex:0
		};
		// console.log('Layout state: ',this.state);
		// console.log('Layout props: ',props);
	}

	render () {

        const children = this.props.children;

        return (
			<div>
				<Head>
					<title>Next.js test</title>
					{/* <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' /> */}
					{/* https://bootswatch.com/minty/ */}
					<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/minty/bootstrap.min.css' />
					{/* more info: https://bootswatch.com/minty/ */}
					<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.9/css/solid.css' integrity='sha384-29Ax2Ao1SMo9Pz5CxU1KMYy+aRLHmOu6hJKgWiViCYpz3f9egAJNwjnKGgr+BXDN' crossorigin='anonymous'/>
					{/* <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.9/css/regular.css' integrity='sha384-seionXF7gEANg+LFxIOw3+igh1ZAWgHpNR8SvE64G/Zgmjd918dTL55e8hOy7P4T' crossorigin='anonymous'/> */}
					<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.9/css/fontawesome.css' integrity='sha384-Lyz+8VfV0lv38W729WFAmn77iH5OSroyONnUva4+gYaQTic3iI2fnUKtDSpbVf0J' crossorigin='anonymous'/>
					{/* <link rel='stylesheet' href='http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css'/> */}
				</Head>
				<Navbar pages={this.props.pages} activePageIndex={this.props.activePageIndex} />
				<MessageQueue msgs={this.props.msgs} />
				<div className='container'>
					{children}
					<script src='https://code.jquery.com/jquery-3.3.1.min.js'></script>
					<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'></script>
					{/* <script src='http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.js'></script> */}
				</div>
                <style jsx global>{`
                    * { box-sizing: border-box; margin:0; padding:0; }
                    .container { margin:1rem; padding:1rem; }
					nav { position:fixed; }
                    pre { color:#444 !important; }
                    .module {
						padding:1em;
						margin:1em 0;
					}
					.submodule {
						padding:1.5em;
						background:lightgrey;
						border-radius:6px;
						margin:1em;
					}
					.thousandths:after {content:'';}
					.thousandths {
						vertical-align:bottom;
						font-size:0.75em;
						line-height:1.4;
					}
				`}</style>
			</div>
		);
	}
}
Layout.propTypes = {
    children: PropTypes.array
}
Layout.defaultProps = {
    pages: [
        {id:0,title:'Home',url:''},
        {id:1,title:'Bitcoin Price Index',url:'bpi'},
        {id:2,title:'TicTacToe Game',url:'tictactoe'},
        {id:3,title:'Projects Editor',url:'projects'},
        {id:4,title:'Clock',url:'clock'},
        {id:5,title:'Timer',url:'timer'},
        {id:6,title:'Test',url:'test'},
        {id:7,title:'CSS Animation',url:'animation'}
    ]
};

export default Layout;