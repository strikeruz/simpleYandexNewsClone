import { useEffect } from 'react';
import DefaultLayout from './../Layouts/DefaultLayout';
import News from './../News/';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewsByCategory, selectNews } from './../News/newsSlice';

function Categories() {
	const dispatch = useDispatch();
	const { slug } = useParams();
	const selectedNews = useSelector(selectNews(slug));

	useEffect(() => {
		dispatch(loadNewsByCategory(selectedNews));
	}, [dispatch, slug]);

	return (
		<DefaultLayout>
			<News {...selectedNews} />
		</DefaultLayout>
	);
}

export default Categories;
