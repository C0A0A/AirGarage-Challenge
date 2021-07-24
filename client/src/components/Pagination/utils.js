import {getPage} from '../../redux/actions';

export const updatePage = (page, i, dispatch, setState) => {
	dispatch(getPage(page));
	setState(i);
};
