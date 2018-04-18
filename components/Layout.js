import React, { Component } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import MessageQueue from '../components/messages/MessageQueue';

class Layout extends Component {

	constructor (props) {
		super(props);
		this.state = {
			links: [
				{id:0,title:'Home',url:''},
				{id:1,title:'Bitcoin Price Index',url:'bpi'},
				{id:2,title:'TicTacToe Game',url:'tictactoe'},
				{id:3,title:'Projects Editor',url:'projects'}
			],
			activePageIndex:0
		};
		// console.log('Layout state: ',this.state);
		// console.log('Layout props: ',props);
	}

	render () {

		// console.log('this.props.children: ', this.props.children);
		

		return (
			<div>
				<Head>
					<title>Next.js test</title>
					{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" /> */}
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/minty/bootstrap.min.css" />
					{/* more info: https://bootswatch.com/minty/ */}
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/solid.css" integrity="sha384-29Ax2Ao1SMo9Pz5CxU1KMYy+aRLHmOu6hJKgWiViCYpz3f9egAJNwjnKGgr+BXDN" crossorigin="anonymous"/>
					{/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/regular.css" integrity="sha384-seionXF7gEANg+LFxIOw3+igh1ZAWgHpNR8SvE64G/Zgmjd918dTL55e8hOy7P4T" crossorigin="anonymous"/> */}
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/fontawesome.css" integrity="sha384-Lyz+8VfV0lv38W729WFAmn77iH5OSroyONnUva4+gYaQTic3iI2fnUKtDSpbVf0J" crossorigin="anonymous"/>
					{/* <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css"/> */}
				</Head>
				<Navbar links={this.state.links} activePageIndex={this.props.activePageIndex} />
				<MessageQueue msgs={this.props.msgs} />
				<div className="container">
					{this.props.children}
					<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
					{/* <script src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.js"></script> */}
				</div>
				<style jsx global>{`
					.module input, .module button, .module textarea, .module select {
						border-radius:3px;
						// border:0;
						// padding:3px 6px;
						// box-shadow:0 1.5px 1px 0.5px rgba(0,0,0,0.5) inset;
					}
					.module input[type=button], .module input[type=submit], .module input[type=reset], .module button, .module select {
						// box-shadow:0 -1.5px 1px 0.5px rgba(0,0,0,0.5) inset;
					}
					.module [type=submit], .module .primary {
						// background:green;
						// color:white;
					}
					.module label {
						width: 100%;
					}
					.module label span {
						// display:inline-block;
						// width:30%;
						// text-align:right;
					}
					.module label input {
						// display:inline-block;
						// width:65%;
						// margin-left:5%;
					}
					.module *[readonly] {
						// background:#999;
						opacity:0.75;
						cursor:not-allowed;
					}
					// .module [type=submit], .module [type=reset] {width:50%;}
					table {
						width:100%;
						padding:2px;
						margin:2px;
					}
					table, th, td {
						border-collapse:separate;
						// border:2px solid grey;
						padding:0;
						margin:0;
						text-align:left;
						vertical-align:top;
					}
					th, td {
						padding:0.25em 0.5em;
					}
					th {
						// background:rgba(0,0,0,0.125);
					}
					thead, th {
						text-align: center;
					}
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

};
Layout.defaultProps = {

};

export default Layout;