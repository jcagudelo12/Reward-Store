import { Header, Modal } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../../assets/icons/coin.svg';

const RedeemProduct = ({
	id,
	img,
	cost,
	points,
	setPoints,
	stateofpoints,
	setstateofpoints,
}) => {
	const [open, setOpen] = useState(false);
	const [response, setResponse] = useState('');

	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};

	const Redeem = (id) => {
		const body = {
			productId: id,
		};

		axios
			.post('https://coding-challenge-api.aerolab.co/redeem', body, config)
			.then((res) => {
				setResponse(res.data);
				setPoints(points - cost);
			})
			.catch((error) => {
				console.error(error);
			});
		setstateofpoints(!stateofpoints);
	};
	const closeAndReload = () => {
		setOpen(false);
	};

	return (
		<Modal
			size="mini"
			closeIcon
			open={open}
			trigger={
				cost < points ? (
					<div className="item_button" onClick={() => Redeem(id)}>
						<img className="buy_img" alt="" />
					</div>
				) : (
					<div className="item_missing_money">
						You need {cost - points}
						<div className="coin_icon">
							<img src={Coin} alt="coin icon" />
						</div>
					</div>
				)
			}
			onClose={() => closeAndReload()}
			onOpen={() => setOpen(true)}
		>
			<Header icon="check" content="Congratulations!" />
			<Modal.Content className="redeem">
				<p>You successfully redeemed {cost} points and got:</p>
			</Modal.Content>
			<Modal.Content className="redeem">
				<img src={img} alt="item redeemed img" />
			</Modal.Content>
		</Modal>
	);
};

export default RedeemProduct;
