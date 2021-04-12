import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../components/News/newsSlice';

export default configureStore({
	reducer: {
		news: newsReducer
	}
});
