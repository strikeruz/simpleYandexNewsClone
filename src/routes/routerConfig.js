import Home from './../components/Pages/Home';
import NewsDetail from './../components/Pages/NewsDetail';

const pageRoutes = [
	{
		component: Home,
		path: '/',
		exact: true
	},
	{
		component: NewsDetail,
		path: '/news/:slug',
		exact: false
	}
];

export default pageRoutes;
