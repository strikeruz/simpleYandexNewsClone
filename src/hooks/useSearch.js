import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterSearchData, selectNews } from './../components/News/newsSlice';

const useSearch = (defaultSearchValue = '') => {
	const [searchText, setSearchText] = useState(defaultSearchValue);
	const { slug } = useParams();
	const dispatch = useDispatch();
	const currentCatNews = useSelector(selectNews(slug));

	useEffect(() => {
		if (searchText.length > 2) {
			const filteredItems = currentCatNews.posts.filter((e) =>
				e.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
			);
			dispatch(filterSearchData(filteredItems));
		} else {
			dispatch(filterSearchData([]));
		}
	}, [dispatch, searchText]);

	return [searchText, setSearchText];
};

export default useSearch;
