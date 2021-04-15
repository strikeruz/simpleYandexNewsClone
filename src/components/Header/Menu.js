import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMenus } from '../News/newsSlice';
import { useParams } from 'react-router-dom';

const Menu = () => {
	const [activeMenu, setActiveMenu] = useState(0);
	const navigations = useSelector(selectMenus);
	const { slug } = useParams();
	return (
		<div className='topmenu'>
			<nav className='topmenu__navmenu'>
				<ul>
					{navigations.map((nav, index) => (
						<li
							key={index}
							className={
								nav.link === `/${slug}` || activeMenu === slug ? 'active' : ''
							}
							onClick={() => setActiveMenu(nav.link)}>
							<Link to={nav.link}>{nav.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
