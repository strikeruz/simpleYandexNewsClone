import DefaultLayout from './../Layouts';
import News from './../News';
import { selectFeaturedNews } from './../News/newsSlice';
import { useSelector } from 'react-redux';

const Home = () => {
	const featuredNews = useSelector(selectFeaturedNews);
	return (
		<DefaultLayout>
			{featuredNews.map((news) => (
				<News key={`${news.id}_${news.category}`} {...news} />
			))}
		</DefaultLayout>
	);
};

export default Home;
