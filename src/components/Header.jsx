import Kite from '../assets/aerolab-logo.svg';
import Hero from '../assets/header-x1.png';
import GetCoins from './Modals/GetCoinsModal';
import History from './Modals/HistoryModal';
import FiltersContainer from './FiltersContainer';
import React, { useState } from 'react';

const Header = () => {
	const [stateOfPoints, setStateOfPoints] = useState(false);
	const [points, setPoints] = useState([]);

	return (
		<>
			<div className="header">
				<div className="header_info_container">
					<img src={Kite} alt="aerolab-logo" />
					<GetCoins
						stateofpoints={stateOfPoints}
						setstateofpoints={setStateOfPoints}
						points={points}
						setPoints={setPoints}
					/>
					<History points={points} />
				</div>
				<div className="header_hero_container">
					<img className="header_hero_img" src={Hero} alt="hero img" />
					<div className="header_hero_text">Electronics</div>
				</div>
			</div>
			<FiltersContainer
				stateofpoints={stateOfPoints}
				setstateofpoints={setStateOfPoints}
				points={points}
				setPoints={setPoints}
			/>
		</>
	);
};

export default Header;
