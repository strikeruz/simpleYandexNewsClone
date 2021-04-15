import React from 'react';
import NewsContext from './../NewsContext';

const CardFooter = () => {
	const context = React.useContext(NewsContext);
	const { source, publishedAt, url } = context;
	const date = new Date(publishedAt);
	const dateFormat = `${date.toLocaleDateString(
		'ru'
	)} ${date.toLocaleTimeString()}`;
	return (
		<div className='mg-card-footer mg-card__footer mg-card__footer_type_image'>
			<div className='mg-card-footer__left'>
				<div className='mg-card-source mg-card__source mg-card__source_dot'>
					<span className='mg-card-source__source'>
						<a
							href={url}
							target='_blank'
							rel='noreferrer'
							className='mg-card__source-link'>
							{source.name}
						</a>
					</span>
					<span className='mg-card-source__time'>{dateFormat}</span>
				</div>
			</div>
			<div className='mg-card-footer__right'></div>
		</div>
	);
};

export default CardFooter;
