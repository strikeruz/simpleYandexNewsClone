import { useEffect } from 'react';
import DefaultLayout from './../Layouts/DefaultLayout';
import News from './../News/';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewsByCategory } from './../News/newsSlice';

function Categories() {
	let { slug } = useParams();
	const dispatch = useDispatch();
	const selectedNews = useSelector((state) =>
		state.news.data.filter((e) => e.link === `/${slug}`)
	)[0];

	useEffect(() => {
		console.log(selectedNews);
		dispatch(
			loadNewsByCategory(selectedNews.category, selectedNews.news_limit)
		);
	}, [dispatch, slug]);

	return (
		<DefaultLayout>
			<News {...selectedNews} />
		</DefaultLayout>
	);
}

export default Categories;
