import React from 'react';
import './home.css';
import { Link } from '../components/button';
function Home() {
	return (
		<section>
			<div className="hero">
				<div className="heading">
					<h1>Elias Mj&oslash;en</h1>
					<h2>Software Developer</h2>
					<h4>Welcome to my personal site!</h4>
					<h5>
						Hi! I'm Elias, a tech guy based in switzerland. I just finished my
						bachelor's degree in computer science at the University of Applied
						Sciences in Windisch (FHNW) and I'm currently looking for a job.
					</h5>
					<p>
						<Link
							link="CV-English.pdf"
							download="CV_Elias_Mjoen.pdf"
							icon="download"
							text="CHECK OUT MY CV"
						/>
					</p>
				</div>
				<div className="portrait__container">
					<svg
						className="portrait__svg"
						viewBox="0 0 90 125"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink">
						<circle cx="45" cy="80" r="45" fill="#3F485F" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M72.5 0H22.5V41.0203C9.0496 48.8011 0.000244141 63.3437 0.000244141 80C0.000244141 104.853 20.1474 125 45.0002 125C69.8531 125 90.0002 104.853 90.0002 80C90.0002 65.5033 83.1453 52.6076 72.5 44.3775V0Z"
							fill="url(#pattern0)"
						/>
						<defs>
							<pattern
								id="pattern0"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1">
								<use
									xlinkHref="#elias"
									transform="matrix(0.000833167 0 0 0.00059988 -0.506872 0.0268962)"
								/>
							</pattern>
							<image
								id="elias"
								width="2500"
								height="1667"
								href="images/elias.png"
							/>
						</defs>
					</svg>
					<Link
						id="linkedin"
						link="https://www.linkedin.com/in/elias-mj%C3%B8en-979814262/">
						<div className="icon-container">
							<svg
								className="icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
								/>
							</svg>
						</div>
					</Link>
					<Link id="github" link="https://github.com/CyberNiinja">
						<div className="icon-container">
							<svg
								viewBox="0 0 96 96"
								xmlns="http://www.w3.org/2000/svg"
								className="icon">
								<path
									fill="currentColor"
									d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
								/>
							</svg>
						</div>
					</Link>
					<Link id="instagram" link="https://www.instagram.com/cyberniinja/">
						<div className="icon-container">
							<svg
								className="icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
						</div>
					</Link>
					<div id="circle__c1" className="circle primary"></div>
					<div id="circle__c2" className="circle primary"></div>
					<div id="circle__c3" className="circle primary"></div>
					<div id="circle__c4" className="circle primary"></div>
				</div>
			</div>
		</section>
	);
}

export default Home;
