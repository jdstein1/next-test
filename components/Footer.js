
import React, { Component } from 'react';
import Link from 'next/link';
// import Router from 'next/router';

class Footer extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = {
	// 	};
	// }

	render () {

        const footerLinks = this.props.links
        // .filter((link) => {
		// 	return link.url !== ''
        // })
        .map((link, i) => {
            if (link.url === '') {
                return (
                    <li key={i} role='presentation'>
                        <a className='nav-item nav-link'>{link.title}</a>
                    </li>
                )    
            } else {
                return (
                    <li key={i} role='presentation'>
                        <Link prefetch href={'/'+link.url}>
                            <a className='nav-item nav-link'>{link.title}</a>
                        </Link>
                    </li>
                )
            }
		});

        return (
			<footer className='navbar navbar-expand-md navbar-light bg-light'>
				<div className='navbar-collapse collapse' id='navbarResponsive'>
					<ul className='navbar-nav' role='group'>
                        {footerLinks}
					</ul>
				</div>
				<style jsx>{`
				`}</style>
			</footer>
		);

	}

}

export default Footer;
