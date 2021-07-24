import React from 'react';
import {useSelector} from 'react-redux';
import './home.css';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import {v4 as idGenerator} from 'uuid';

const Home = () => {
	const parkings = useSelector((state) => state.parkings.parkings);
	const pages = useSelector((state) => state.parkings.pages);

	return (
		<div>
			<SearchBar />
			<div className='cards-container'>
				{parkings &&
					parkings.map((parking) => (
						<Card key={idGenerator()} parking={parking} />
					))}
			</div>
			<Pagination pages={pages} />
		</div>
	);
};

export default Home;
