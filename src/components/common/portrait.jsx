import React from 'react';
import './portrait.css';

export default function Portrait({ img }) {
	return (
		<div className="portrait">
			<div className="portrait-container">
				<div id="circle-portrait" className="circle"></div>
				<img id="portrait-img" src={img} alt="portrait"></img>
			</div>
		</div>
	);
}
