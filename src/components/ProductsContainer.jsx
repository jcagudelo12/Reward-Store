import Product from './Product';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContainer = ({
	page,
	filter,
	stateofpoints,
	setstateofpoints,
	points,
	setPoints,
}) => {
	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};

	const [products, setProducts] = useState([]);
	//const [points, setPoints] = useState(0);

	useEffect(() => {
		axios
			.get('https://coding-challenge-api.aerolab.co/products', config)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
		axios
			.get('https://coding-challenge-api.aerolab.co/user/me', config)
			.then((res) => {
				setPoints(res.data.points);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [points]);

	var productsFilters = products
		? filter === ''
			? products
			: filter === 'highest'
			? products.sort((a, b) => b.cost - a.cost)
			: filter === 'lowest'
			? products.sort((a, b) => a.cost - b.cost)
			: filter === 'category'
			? products.sort(function (a, b) {
					if (a.category > b.category) {
						return 1;
					}
					if (a.category < b.category) {
						return -1;
					}
					return 0;
			  })
			: []
		: [];

	var productsPage = productsFilters
		? page === 'page1'
			? productsFilters.slice(0, 16)
			: productsFilters.slice(16, 32)
		: [];

	var listProducts = productsPage.map((prod) => (
		<Product
			stateofpoints={stateofpoints}
			setstateofpoints={setstateofpoints}
			key={prod._id}
			id={prod._id}
			//points={points}
			cost={prod.cost}
			img={prod.img.url}
			category={prod.category}
			name={prod.name}
			points={points}
			setPoints={setPoints}
		/>
	));

	return <div className="items_container">{listProducts}</div>;
};

export default ProductsContainer;
