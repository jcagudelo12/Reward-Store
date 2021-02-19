import React, { useState } from 'react';

import Filters from './Filters';

const FiltersContainer = ({
	stateofpoints,
	setstateofpoints,
	points,
	setPoints,
}) => {
	const [page, setPage] = useState('page1');
	const [filter, setFilter] = useState('');

	return (
		<Filters
			stateofpoints={stateofpoints}
			setstateofpoints={setstateofpoints}
			page={page}
			changepage={setPage}
			filter={filter}
			changefilter={setFilter}
			points={points}
			setPoints={setPoints}
		/>
	);
};

export default FiltersContainer;
