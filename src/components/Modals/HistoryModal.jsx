import { Header, Modal } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const History = ({ points }) => {
	const [open, setOpen] = useState(false);
	const [history, setHistory] = useState([]);

	useEffect(() => {
		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDAwZDllMzliNjk4OTAwMTlmNGI3NTMiLCJpYXQiOjE2MTA2Njg1MTV9.DJIRAx-_7ynGRqnK2GVur1VKCpj7i-kLB43IbuN-7g0',
			},
		};
		axios
			.get('https://coding-challenge-api.aerolab.co/user/history', config)
			.then((res) => {
				setHistory(res.data.reverse());
			})
			.catch((error) => {
				console.error(error);
			});
	}, [points]);

	const List = () => {
		return history.map((item) => (
			<div key={item.createDate} className="history_item">
				<img src={item.img.url} alt="" />
				<div>{item.cost} $</div>
				<div>{item.name}</div>
				<div>{item.createDate.substr(0, 10)}</div>
				<div>{item.createDate.substr(11, 8)}</div>

				<br />
			</div>
		));
	};

	return (
		<Modal
			size="large"
			closeIcon
			open={open}
			trigger={<div className="header_history">History</div>}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
		>
			<Header icon="book" content="History" />
			<Modal.Content className="history" scrolling className="redeem">
				<div className="history_body">{List()}</div>
			</Modal.Content>
		</Modal>
	);
};

export default History;
