import React from 'react';
import './card.css';
import {Rating} from '@material-ui/lab';
import {v4 as idGenerator} from 'uuid';

const Card = ({parking}) => {
	return (
		<div className='card-container'>
			<a href={parking.url}>
				<h3>{parking.name}</h3>
			</a>

			<div className='img-container'>
				<img
					src={
						parking.image_url
							? parking.image_url
							: 'https://res.cloudinary.com/g1-ecommerce/image/upload/v1627090760/Image_not_available_vcwcnj.png'
					}
					alt={parking.name + ' parking lot'}
				/>
			</div>
			<div className='row-div'>
				<div className='card-info'>
					<h4>CLASIFICATION</h4>
					<div id='score-div'>{String(parking.score).slice(0, 4)} Score</div>
					<Rating
						name='half-rating-read'
						defaultValue={parking.rating}
						precision={0.5}
						readOnly
					/>
					<span>{parking.reviews} Reviews</span>
				</div>

				<ul className='card-info'>
					<h4>LOCATION</h4>
					{parking.address &&
						parking.address.map((parking) => (
							<li key={idGenerator()}>{parking}</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Card;
