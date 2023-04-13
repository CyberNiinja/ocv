import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';
function Home() {
	return (
		<section id="home">
			<div>
				<div className="circle-container">
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
				</div>
				<h1>Hello!</h1>
				<div className="circle-container">
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
				</div>
			</div>

			<h5>
				I'm Elias a, 25 year old <br />
				<span>
					<h2>Software Developer & UI/UX Designer</h2>
				</span>
				from Switzerland.
			</h5>
		</section>
	);
}

export default Home;
