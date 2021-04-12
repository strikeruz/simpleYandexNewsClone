import React from 'react';
import NewsContext from './../NewsContext';

const CardMedia = () => {
	const context = React.useContext(NewsContext);
	const { image } = context;
	return (
		<div className='mg-card__media'>
			<div
				className='mg-media-block mg-media-block_type_image mg-media-block_square mg-card__media-block mg-card__media-block_type_image'
				data-log-id='u-1616762562000-44'>
				<div className='mg-media-block__image'>
					<img className='neo-image neo-image_loaded' alt='' src={image} />
				</div>
			</div>
		</div>
	);
};

export default CardMedia;
