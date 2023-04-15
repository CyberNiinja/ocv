import React from 'react';
import './portrait.css';
export default function Portrait({ image }) {
	return (
		<div className="portrait">
			<div className="portrait-container">
				<div id="circle-portrait" className="circle"></div>
				<img id="portrait-img" src={image} alt="portrait"></img>
			</div>
		</div>
	);
}
