import RedeemModal from './Modals/RedeemModal';
import Coin from '../assets/icons/coin.svg';

function Product({
	id,
	cost,
	img,
	category,
	name,
	stateofpoints,
	setstateofpoints,
	points,
	setPoints,
}) {
	return (
		<div className="item_container">
			<RedeemModal
				stateofpoints={stateofpoints}
				setstateofpoints={setstateofpoints}
				points={points}
				setPoints={setPoints}
				id={id}
				cost={cost}
				img={img}
			/>
			<div className="item_img_container">
				<img className="item_img" src={img} alt="imagen del producto" />
			</div>
			<hr className="separator_item" />
			<div className="item_info">
				<div className="item_category">{category}</div>
				<div className="item_name">{name}</div>
				<div className="item_cost">
					{cost}
					<div>
						<img className="coin" src={Coin} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
