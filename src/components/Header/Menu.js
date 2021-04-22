import { Link } from 'react-router-dom';
import useMenu from './../../hooks/useMenu';

const Menu = () => {
	const [activeMenu, setActiveMenu, navigations] = useMenu();
	return (
		<div className='topmenu'>
			<nav className='topmenu__navmenu'>
				<ul>
					{navigations.map((nav, index) => (
						<li
							key={index}
							className={activeMenu === index ? 'active' : null}
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
