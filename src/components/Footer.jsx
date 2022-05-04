import React from 'react';

const Footer = () => {
	return ( 
		<footer className='footer'>
			<div className="container">
				<span className='footer_copy'>© {new Date() . getFullYear()} Copyright Text</span>
				<a href="https://github.com/SerjeyMelnik/react-shop" className="header_link-a">Repository</a>
			</div>
		</footer>
	 );
}
 
export default Footer;