import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class Navbar extends Component {

	constructor (props) {
		super(props);
		this.state = {
		};
		// console.log('Navbar state: ',this.state);
		// console.log('Navbar props: ',props);
	}

	isActiveNav(id,activepage) {
		// console.log('id: ',id);
		// console.log('activepage: ',activepage);
		if (activepage===id) {
			return true;
		} else {
			return false;
		}
	};

	render () {

		const navLinks = this.props.pages.filter(link => {
			return link.url !== ''
		}).map((link, i) => {
			return (
				<li key={i} role='presentation'>
					<Link prefetch href={'/'+link.url}>
						<a className={'nav-item nav-link ' + (this.isActiveNav(link.id,this.props.activePageIndex)?'active':'')}>{link.title}</a>
					</Link>
				</li>
			)
		});

		return (
			<nav className='navbar navbar-expand-md navbar-light bg-light'>
				<Link href='/'><a className='navbar-brand'>AppName</a></Link>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='true' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
				</button>
				<div className='navbar-collapse collapse' id='navbarResponsive'>
					<ul className='navbar-nav' role='group'>
						{navLinks}
					</ul>
				</div>
				<style jsx>{`
				`}</style>
			</nav>
		);

	}

}

Navbar.propTypes = {

};

Navbar.defaultProps = {

};

export default Navbar;
