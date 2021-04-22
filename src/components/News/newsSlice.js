import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
	name: 'featureNews',
	initialState: {
		data: [],
		filtered_data: {
			posts: []
		},
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
			let index = state.data.findIndex(
				(e) => e.id === action.payload.catItem.id
			);

			state.data[index].posts = action.payload.data.articles;
			state.loading = false;
		},
		filterSearchData: (state, action) => {
			state.filtered_data.posts = action.payload;
			state.loading = false;
		}
	}
});

export const {
	loadNews,
	errorNews,
	fetchAllCatsFromDb,
	loadNewsByCatsName,
	filterSearchData
} = newsSlice.actions;

export default newsSlice.reducer;

// Selectors
export const selectAllCategory = (state) =>
	state.news.data.map((e) => e.category);

export const selectFeaturedNews = (state) =>
	state.news.data.filter((e) => e.feature);

export const selectMenus = (state) =>
	state.news.data.map((e) => ({ title: e.category, link: e.link }));

export const selectNews = (currentPageSlug) => (state) => {
	const selectedNews = state.news.data.filter(
		(e) => e.link === '/' + currentPageSlug
	)[0];

	return state.news.filtered_data.posts.length > 0
		? state.news.filtered_data
		: selectedNews;
};

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

export const loadNewsByCategory = (catItem) => async (dispatch) => {
	try {
		await fetch(
			`${process.env.REACT_APP_API_URL}search?q=${catItem.category}&token=${process.env.REACT_APP_NEWS_API_KEY}&max=${catItem.news_limit}`
		)
			.then((res) => res.json())
			.then((data) => {
				const payload = {
					catItem,
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
