import React, { Component } from 'react';
import Link from 'next/link';
// import Router from 'next/router';

class Navbar extends Component {

	isActiveNav(id) {
        const { activePageIndex } = this.props;
		if (activePageIndex===id) {
			return true;
		} else {
			return false;
		}
	};

	render () {
        const {links} = this.props;
        // console.log('links: ', links);
        
        const navLinks = links
        // .filter(link => {
		// 	return link.url !== ''
        // })
        .map((link, i) => {
            if (link.url === null) {
                return (
                    <li key={i} role='presentation' className={this.isActiveNav(link.id) ? 'active' : ''}>
                        <div className='nav-item nav-link'>{link.title}</div>
                    </li>
                )    
            } else {
                return (
                    <li key={i} role='presentation' className={this.isActiveNav(link.id) ? 'active' : ''}>
                        <Link prefetch href={'/'+link.url}>
                            <a className='nav-item nav-link'>{link.title}</a>
                        </Link>
                    </li>
                )
            }
		});

		return (
			<nav className='navbar navbar-expand-md navbar-light bg-light'>
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

export default Navbar;
