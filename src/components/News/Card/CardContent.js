import React from 'react';
import CardMedia from './CardMedia';
import CardInfo from './CardInfo';

const CardContent = () => {
	return (
		<div className='mg-card__content'>
			<CardInfo />
			<CardMedia />
		</div>
	);
};

export default CardContent;
