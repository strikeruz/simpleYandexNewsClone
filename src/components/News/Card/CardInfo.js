import React from 'react';
import NewsContext from './../NewsContext';
const CardInfo = () => {
	const context = React.useContext(NewsContext);
	const { title, description, url } = context;
	return (
		<div className='mg-card__text-content'>
			<div className='mg-card__text'>
				<a
					href={url}
					target='_blank'
					rel='noreferrer'
					className='mg-card__link'>
					<h2 className='mg-card__title'>{title}</h2>
				</a>
				<div className='mg-card__annotation'>{description}</div>
			</div>
		</div>
	);
};

export default CardInfo;
