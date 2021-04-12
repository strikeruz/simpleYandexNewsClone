import React from 'react';
import CardFooter from './CardFooter';
import CardContent from './CardContent';
import NewsContext from './../NewsContext';

const Card = (newsData) => {
	return (
		<div className='mg-grid__col mg-grid__col_xs_4'>
			<article className='mg-card mg-card_flexible-half mg-card_type_image mg-grid__item'>
				<NewsContext.Provider value={newsData}>
					<CardContent />
					<CardFooter />
				</NewsContext.Provider>
			</article>
		</div>
	);
};

export default Card;
