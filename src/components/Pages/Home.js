import React, { useEffect } from 'react';
import DefaultLayout from './../Layouts';
import News from './../News';
import { selectFeaturedNews, loadNewsByCategory } from './../News/newsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();
	const featuredNews = useSelector(selectFeaturedNews);
	const loadFeaturedNews = async () => {
		for (let index = 0; index < featuredNews.length; index++) {
			await dispatch(loadNewsByCategory(featuredNews[index]));
		}
	};
	useEffect(() => {
		loadFeaturedNews();
	}, []);
	return (
		<DefaultLayout>
			{featuredNews.map((news) => (
				<News key={`${news.id}_${news.category}`} {...news} />
			))}
		</DefaultLayout>
	);
};

export default Home;
