import { useRef } from 'react';
import useSearch from './../../hooks/useSearch';

const SearchForm = () => {
	const [searchText, setSearchText] = useSearch('');
	const searchInputEl = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchText(searchInputEl.current.value);
	};
	return (
		<div className='topheader__searchform'>
			<form onSubmit={handleSubmit} className='searchform__form'>
				<input name='q' type='text' ref={searchInputEl} />
				<button type='submit'>Найти</button>
			</form>
		</div>
	);
};

export default SearchForm;
