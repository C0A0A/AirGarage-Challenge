import {getParkings} from '../../redux/actions';

export const handleInput = (e, setState) => {
	setState((prevState) => {
		return {
			...prevState,
			[e.target.name]: e.target.value
		};
	});
};

export const handleSearch = (dispatch, state) => {
	const {location, score, limit} = state;
	dispatch(getParkings(location, score, limit));
};
