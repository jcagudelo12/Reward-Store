import Coin from '../../assets/icons/coin.svg';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetCoins = ({ stateofpoints, setstateofpoints, points, setPoints }) => {
	const [addedPoints, setAddedPoints] = useState('');
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState([]);
	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
		},
	};

	useEffect(() => {
		axios
			.get('https://coding-challenge-api.aerolab.co/user/me', config)
			.then((res) => {
				setUser(res.data);
				setPoints(res.data.points);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [points]);

	const getPoints = (pointsToAdd) => {
		const body = {
			amount: pointsToAdd,
		};

		setAddedPoints(
			`You added ${pointsToAdd} points, now you have ${
				pointsToAdd + points
			} points`
		);
		axios
			.post('https://coding-challenge-api.aerolab.co/user/points', body, config)
			.then((res) => {
				setPoints(res.data['New Points']);
			})
			.catch((error) => {
				console.error(error);
			});
		setstateofpoints(!stateofpoints);
	};

	return (
		<Modal
			onUnmount={() => setAddedPoints('')}
			size="tiny"
			closeIcon
			open={open}
			trigger={
				<div className="header_user_container">
					<div className="header_user_name">{user.name}</div>
					<div className="header_user_coins">
						{points}
						<div className="coin_icon">
							<img src={Coin} alt="coin icon" />
						</div>
					</div>
				</div>
			}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
		>
			<Header icon="money" content="Add more points!" />
			<Modal.Content>
				<p>How many points do you want to add?</p>
			</Modal.Content>
			<Modal.Actions className="add_buttons">
				<Button onClick={() => getPoints(1000)} color="black">
					<Icon name="dollar sign" /> 1000
				</Button>
				<Button onClick={() => getPoints(5000)} color="black">
					<Icon name="dollar sign" /> 5000
				</Button>
				<Button onClick={() => getPoints(7500)} color="black">
					<Icon name="dollar sign" /> 7500
				</Button>
			</Modal.Actions>
			<Modal.Content>
				<p className="added_points">{addedPoints}</p>
			</Modal.Content>
		</Modal>
	);
};

export default GetCoins;
