import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMenus } from '../components/News/newsSlice';

const useMenu = () => {
	const [activeMenu, setActiveMenu] = useState(0);
	const navigations = useSelector(selectMenus);
	const { slug } = useParams();
	useEffect(() => {
		let reg = new RegExp(`/${slug}`, 'g');
		const activeMenuIndex = navigations.findIndex((e) => reg.test(e.link));

		if (activeMenuIndex >= 0) {
			setActiveMenu(activeMenuIndex);
		}
	}, [slug]);
	return [activeMenu, setActiveMenu, navigations];
};

export default useMenu;
