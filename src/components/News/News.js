import NewsCategories from './NewsCategories';
import uuid from 'react-uuid';

const News = (props) => {
	const { category, posts } = props;
	return (
		<div className='mg-grid__row mg-grid__row_gap_8'>
			<div className='mg-grid__col mg-grid__col_xs_12 mg-grid__col_sm_12'>
				<div className='news-app__heading-wrapper'>
					<div className='news-top-rubric-heading news-app__heading'>
						<a
							href='/'
							target='_self'
							rel='noopener'
							className='news-top-rubric-heading__title'>
							{category}
						</a>
					</div>
				</div>
				{posts.length > 0
					? posts.map((post) => (
							<NewsCategories key={uuid()} articles={post.articles} />
					  ))
					: 'Loading...'}
			</div>
		</div>
	);
};

export default News;
