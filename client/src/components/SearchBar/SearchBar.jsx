import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './searchBar.css';
import {handleInput, handleSearch} from './utils';
import {FaSearchLocation} from 'react-icons/fa';

const SearchBar = () => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		location: '',
		score: 2.5,
		limit: 6,
	});

	return (
		<div className='search-container'>
			<div className='search-div'>
				<div className='search-items'>
					<input
						name='location'
						type='text'
						placeholder='Enter a city, country, region, zip code, etc.'
						value={state.location}
						onChange={(e) => handleInput(e, setState)}
					/>
					<div className='icon-div'>
						<FaSearchLocation
							className='icon-search'
							onClick={() => handleSearch(dispatch, state, setState)}
						/>
					</div>
				</div>
			</div>
			<div>
				<label>Max Score</label>
				<input
					name='score'
					className='filter-input'
					type='number'
					min='0'
					max='5'
					value={state.score}
					onChange={(e) => handleInput(e, setState)}
				/>
				<label>Results per page</label>
				<input
					name='limit'
					className='filter-input'
					type='number'
					min='0'
					max='5'
					value={state.limit}
					onChange={(e) => handleInput(e, setState)}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
