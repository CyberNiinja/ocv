import React from 'react';
import './portrait.css';

export default function Portrait() {
	return (
		<div className="portrait">
			<div className="portrait-container">
				<div id="circle-portrait" className="circle"></div>
				<img
					id="portrait-img"
					src="images/shirt_left_square-web.png"
					alt="portrait"></img>
			</div>
		</div>
	);
}
