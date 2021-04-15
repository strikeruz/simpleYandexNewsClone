import { createSlice } from '@reduxjs/toolkit';
import { arrayEquals } from '../../utils';

export const newsSlice = createSlice({
	name: 'featureNews',
	initialState: {
		data: [],
		loading: true,
		error: null
	},
	reducers: {
		loadNews: (state) => {
			state.loading = true;
		},
		errorNews: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		fetchAllCatsFromDb: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},
		loadNewsByCatsName: (state, action) => {
			const newsIndexByCatName = state.data.findIndex(
				(el) => el.category === action.payload.category
			);
			state.data[newsIndexByCatName].posts = action.payload.data;
			state.loading = false;
		}
	}
});

export const {
	loadNews,
	errorNews,
	fetchAllCatsFromDb,
	loadNewsByCatsName
} = newsSlice.actions;

export default newsSlice.reducer;

// Selectors
export const selectAllCategory = (state) =>
	state.news.data.map((e) => e.category);

export const selectFeaturedNews = (state) =>
	state.news.data.filter((e) => e.feature);

export const selectMenus = (state) =>
	state.news.data.map((e) => ({ title: e.category, link: e.link }));

export const currentNews = (state) =>
	state.news.data.map((e) => ({ title: e.category, link: e.link }));

// Actions
// Initialize all cats from DB
export const loadAllCategoryFromDb = () => async (dispatch) => {
	dispatch(loadNews());
	await fetch('/seeds/news.json', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then((response) => response.json())
		.then((data) => {
			dispatch(fetchAllCatsFromDb(data));
		})
		.catch((e) => {
			dispatch(errorNews(e));
			throw new Error(e);
		});
};

export const loadNewsByCategory = (searchCatName, limit) => async (
	dispatch
) => {
	try {
		await fetch(
			`${process.env.REACT_APP_API_URL}search?q=${searchCatName}&token=${process.env.REACT_APP_NEWS_API_KEY}&max=${limit}`
		)
			.then((res) => res.json())
			.then((data) => {
				const payload = {
					category: searchCatName,
					data
				};
				dispatch(loadNewsByCatsName(payload));
			})
			.catch((e) => {
				throw new Error(e);
			});
	} catch (error) {
		throw new Error(error);
	}
};
