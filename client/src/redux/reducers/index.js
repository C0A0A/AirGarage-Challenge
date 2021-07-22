import {ActionTypes} from '../constants';

const initialState = {
	parkings: [],
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.GET_PARKINGS_SUCCESS:
			return {
				...state,
				parkings: payload,
			};
		case ActionTypes.GET_PARKINGS_FAILURE:
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
};

export default reducer;
