import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 dark:bg-black dark:text-gray-400">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
    
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			{/* <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
				<img src={logo} alt="" />
			</div> */}
           
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<Link to='' >Terms of Use</Link>
				</li>
				<li>
					<Link to=''>Privacy</Link>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<Link to=''>Instagram</Link>
			</li>
			<li>
				<Link to=''>Facebook</Link>
			</li>
			<li>
				<Link to=''>Twitter</Link>
			</li>
		</ul>
	</div>
    <hr  className='my-5'/>
    <h3 className='text-md text-center'>©2022 Globe Route Travels </h3>
</footer>
        </div>
    );
};

export default Footer;