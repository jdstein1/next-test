
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
// import Router from 'next/router';

class Footer extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = {
	// 	};
	// }

	render () {

        const {links} = this.props;

        return (
			<footer className='navbar navbar-expand-md navbar-light bg-light'>
                <Navbar links={links} />
				<style jsx>{`
				`}</style>
			</footer>
		);

	}

}

export default Footer;
