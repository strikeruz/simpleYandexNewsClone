import React, { useEffect } from 'react';
import pageRoutes from './routes/routerConfig';
import RenderRoutes from './components/Router/';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllCategoryFromDb } from './components/News/newsSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadAllCategoryFromDb());
	}, [dispatch]);
	const { loading, error } = useSelector((state) => state.news);
	if (loading) return 'Loading...';
	if (error) return 'Error';

	return <RenderRoutes routes={pageRoutes} />;
}

export default App;
