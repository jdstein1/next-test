import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
// import Router from 'next/router';

class Header extends Component {

	render () {
        const { links } = this.props;

		return (
			<header className='navbar navbar-expand-md navbar-light bg-light'>
				<Link href='/'><a className='navbar-brand'>Next.js Test App</a></Link>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='true' aria-label='Toggle navigation'>
    				<span className='navbar-toggler-icon'></span>
				</button>
                    <Navbar links={links} />
                <style jsx>{`
				`}</style>
			</header>
		);

	}

}

export default Header;
