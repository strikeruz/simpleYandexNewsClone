import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useNav from '../../hooks/useNav';

const Menu = () => {
	const [activeMenu, setActiveMenu] = useState(0);
	const navigations = useNav();
	return (
		<div className='topmenu'>
			<nav className='topmenu__navmenu'>
				<ul>
					{navigations.map((nav, index) => (
						<li
							key={index}
							className={index === activeMenu ? 'active' : ''}
							onClick={() => setActiveMenu(index)}>
							<Link to={nav.link}>{nav.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
