import React from 'react';
import './home.css';
import Project from '../components/project';
import { Link } from '../components/button';
function Home() {
	return (
		<>
			<div className="heading">
				<h1>Welcome!</h1>
				<h2>To my personal website</h2>
			</div>
			<div className="content">
				<section id="home">
					<div className="header-link">
						<h3>About Me</h3>
						<Link link="/about" text="More" icon="chevron_right" />
					</div>

					<p>
						I'm a norwegian-swiss lad who recently graduated from FHNW with a
						bachelors degree in computer science. I'm currently looking for a
						job as software developer or ui/ux designer.{' '}
						<Link
							link="CV-English.pdf"
							download="CV_Elias_Mjoen.pdf"
							icon="download"
							text="Download CV"
						/>
						<br></br>
					</p>

					<div className="header-link">
						<h3>Portfolio</h3>
						<Link link="/projects" text="More" icon="chevron_right" />
					</div>
					<p>Here's my most recent project: </p>
					<Project />
				</section>
			</div>
		</>
	);
}

export default Home;
