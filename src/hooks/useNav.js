// import news from 'http://localhost:3000/seeds/news.json';
const useNav = () => {
	// return news.map((news) => ({
	// 	title: news.category,
	// 	link: news.link
	// }));
	return [
		{
			title: 'Новости',
			link: '/news'
		}
	];
};
export default useNav;
