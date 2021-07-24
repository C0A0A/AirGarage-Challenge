import React from 'react';
import {useDispatch} from 'react-redux';
import {updatePage} from './utils';
import {v4 as idGenerator} from 'uuid';
import './pagination.css';

const Pagination = ({pages}) => {
	const dispatch = useDispatch();
	const [current, setCurrent] = React.useState(0);

	return (
		<div>
			{pages &&
				pages.map((page, i) => {
					if (i === current) {
						return (
							<button
								key={idGenerator()}
								className='page-current page-not-current '
								onClick={() => updatePage(page, i, dispatch, setCurrent)}
							>
								{i + 1}
							</button>
						);
					} else
						return (
							<button
								key={idGenerator()}
								className='page-current '
								onClick={() => updatePage(page, i, dispatch, setCurrent)}
							>
								{i + 1}
							</button>
						);
				})}
		</div>
	);
};

export default Pagination;
