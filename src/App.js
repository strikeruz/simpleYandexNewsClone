import React, { useEffect } from 'react';
import pageRoutes from './routes/routerConfig';
import RenderRoutes from './components/Router/';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllCategoryFromDb } from './components/News/newsSlice';

const App = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.news.loading);

	const loadCats = async () => {
		await dispatch(loadAllCategoryFromDb());
	};
	useEffect(() => {
		loadCats();
	}, []);

	return !loading && <RenderRoutes routes={pageRoutes} />;
};

export default App;
