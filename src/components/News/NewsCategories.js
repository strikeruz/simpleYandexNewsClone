import CardNews from './Card';
import uuid from 'react-uuid';
const NewsCategories = ({ articles }) => {
	return (
		<div className='mg-grid__row mg-grid__row_gap_8 news-top-rubric-flexible-stories news-app__top'>
			{articles.length > 0
				? articles.map((news) => <CardNews key={uuid()} {...news} />)
				: 'Error Loading Api Data'}
		</div>
	);
};

export default NewsCategories;
