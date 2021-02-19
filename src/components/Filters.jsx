import ArrowRight from '../assets/icons/arrow-right.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import ProductsContainer from './ProductsContainer';

const Filters = ({
	stateofpoints,
	setstateofpoints,
	page,
	changepage,
	filter,
	changefilter,
	points,
	setPoints,
}) => {
	return (
		<div className="main_container">
			<div className="filters_container">
				<div className="filters_products">
					{page === 'page1' ? '16 of 32 products' : '32 of 32 products'}
				</div>
				<div className="separator_products"></div>
				<div className="filters_sort">Sort by:</div>
				<button
					className="filters_sort_category"
					onClick={() => changefilter('category')}
				>
					Category
				</button>
				<button
					className="filters_sort_lowest"
					onClick={() => changefilter('lowest')}
				>
					Lowest price
				</button>
				<button
					className="filters_sort_highest"
					onClick={() => changefilter('highest')}
				>
					Highest price
				</button>
				<div className="arrow">
					{page === 'page1' ? (
						<img onClick={() => changepage('page2')} src={ArrowRight} alt="" />
					) : (
						<img onClick={() => changepage('page1')} src={ArrowLeft} alt="" />
					)}
				</div>
			</div>
			<hr className="separator_filter" />
			<ProductsContainer
				stateofpoints={stateofpoints}
				setstateofpoints={setstateofpoints}
				page={page}
				filter={filter}
				points={points}
				setPoints={setPoints}
			/>
		</div>
	);
};

export default Filters;
