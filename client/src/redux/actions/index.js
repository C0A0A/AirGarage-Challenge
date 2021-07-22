import axios from 'axios';
import {ActionTypes} from '../constants';

export const getParkings = (location, score, limit) => {
	return async (dispatch) => {
		try {
			const {data} = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL}?location=${location}&score=${score}&limit=${limit}`
			);
			dispatch({
				type: ActionTypes.GET_PARKINGS_SUCCESS,
				payload: data.response,
			});
		} catch (error) {
			dispatch({
				type: ActionTypes.GET_PARKINGS_FAILURE,
				payload: {
					error: error.message,
				},
			});
		}
	};
};
