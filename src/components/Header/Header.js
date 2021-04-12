import React from 'react';
import SearchForm from './SearchForm';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='topheader'>
					<Logo />
					<SearchForm />
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
