import {getParkings} from '../../redux/actions';

export const handleInput = (e, setState) => {
	setState((prevState) => {
		return {
			...prevState,
			[e.target.name]: e.target.value,
		};
	});
};

export const handleSearch = (dispatch, state, setState) => {
	const {location, score, limit} = state;
	if (location) {
		dispatch(getParkings(location, score, limit));
	} else {
		alert('Please enter a location');
	}
};
