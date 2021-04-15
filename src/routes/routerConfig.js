import Home from './../components/Pages/Home';
import NewsDetail from './../components/Pages/NewsDetail';
import Categories from './../components/Pages/Categories';

const pageRoutes = [
	{
		component: Home,
		path: '/',
		exact: true
	},
	{
		component: Categories,
		path: '/:slug',
		exact: true
	}
];

export default pageRoutes;
