import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
	name: 'featureNews',
	initialState: {
		data: [],
		loading: false,
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
			state.data[newsIndexByCatName].posts.push(action.payload.data);
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

export const selectFeaturedNews = (state) => state.news.data;

// Actions
// Initialize all cats from DB
export const loadAllCategoryFromDb = () => async (dispatch) => {
	dispatch(loadNews());
	await fetch('http://localhost:3000/seeds/news.json', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then((response) => response.json())
		.then((data) => {
			dispatch(fetchAllCatsFromDb(data));
			let categories = data.map((e) => e.category);
			for (let index = 0; index < categories.length; index++) {
				setTimeout(() => {
					dispatch(loadNewsByCategory(categories[index]));
				}, 1000);
			}
		})
		.catch((e) => {
			dispatch(errorNews(e));
			throw new Error(e);
		});
};

export const loadNewsByCategory = (searchCatName) => async (dispatch) => {
	try {
		await fetch(
			`${process.env.REACT_APP_API_URL}search?q=${searchCatName}&token=${process.env.REACT_APP_NEWS_API_KEY}`
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
