import React from 'react';
import NewsContext from './../NewsContext';

const CardFooter = () => {
	const context = React.useContext(NewsContext);
	const { source } = context;
	const date = new Date(source.publishedAt).toDateString();
	return (
		<div className='mg-card-footer mg-card__footer mg-card__footer_type_image'>
			<div className='mg-card-footer__left'>
				<div className='mg-card-source mg-card__source mg-card__source_dot'>
					<span className='mg-card-source__source'>
						<a
							href='/'
							target='_self'
							rel='noopener'
							className='mg-card__source-link'>
							{source.name}
						</a>
					</span>
					<span className='mg-card-source__time'>{date}</span>
				</div>
			</div>
			<div className='mg-card-footer__right'></div>
		</div>
	);
};

export default CardFooter;
