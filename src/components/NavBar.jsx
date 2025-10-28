import { useState } from 'react';
import logo from '../content/logo.png'

export const NavbarHamburger = (props) => {
	if(props.isOpen) {
		return(
			<>
				<path
					strokeLinecap="round" 
					stroke-linejoin="round"
					strokeWidth={2} 
					d="M6 18L18 6M6 6l12 12" 
				/>
			</>
		);
	}
	return(
		<>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4 6h16M4 12h16M4 18h16'
			/>
		</>
	);
};

export const Navbar = () => {
	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<>
			<nav className='w-full flex items-center justify-between top-0 z-50 flex-wrap bg-black bg-opacity-50 px-3 fixed'>
				<a href="/" className="inline-flex items-center p-2 mr-4">
					<span className='flex items-center text-2xl text-white font-roboto tracking-wide'>
						<img className="" width='80px' height ='80px' src={logo.src} />
					</span>
				</a>
				<button className='inline-flex p-3 rounded lg:hidden text-white hover:text-gray-300 outline-none' onClick={handleClick}>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<NavbarHamburger isOpen={active}/>
					</svg>
				</button>
				<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="/#">Home</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					{/* <li><a className="text-sm text-gray-300 hover:text-gray-500" href="/OurTeam">Our Team</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li> */}
					{/* <li><a className="text-sm text-gray-300 hover:text-gray-500" href="/OurSatellite">Our Satellite</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li> */}
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="/#about">About Us</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="/radio">Amateur Radio</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="mailto:munstar1sat@gmail.com">Contact</a></li>
				</ul>
				<div className={`relative ${active ? 'flex items-center' : 'hidden'} flex-col pb-2 w-full lg:hidden lg:flex-grow lg:w-auto`}>
					<a href="/#" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Home
					</a>
					{/* <a href="/OurTeam" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Our Team
					</a> */}
					{/* <a href="/OurSatellite" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Our Satellite
					</a> */}
					<a href="/#about" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						About Us
					</a>
					<a href="/radio" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Amateur Radio
					</a>
					<a href="mailto:munstar1sat@gmail.com" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Contact
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
