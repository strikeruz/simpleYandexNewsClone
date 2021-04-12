import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	);
};

export default DefaultLayout;
