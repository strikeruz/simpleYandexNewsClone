import React from 'react';

function Container({ children }) {
	return (
		<section className='main'>
			<div className='container'>
				<div className='news-app__content'>{children}</div>
			</div>
		</section>
	);
}

export default Container;
