import React from 'react';
import Project from '../components/project';
export default function Projects() {
	return (
		<>
			<div className="heading">
				<h1>Projects</h1>
				<h2>My notable work</h2>
			</div>
			<div className="content">
				<section id="projects">
					<Project
						name="SIV"
						short="Development of a system integrity verifier for linux operating systems
                        as part of a school project in my exchange semester. It can be used to
                        verify the integrity of a system by comparing the hashes of all files 
                        in a previously initialized directory to their original counterparts."
						tags={['C++', 'linux']}
						pictures={['images/siv/SIV.jpg']}
					/>
					<Project
						name="Scheduling problems"
						short="Research and development of a universal model for scheduling 
                        problems, with a website that allows users to formulate their own
                        scheduling problems using the model and connects it to a solver. The
                        website was developed as part of a bachelor thesis and was done in a
                        team of 2 people."
						tags={['Thesis', 'C#', '.NET6', 'Blazor', 'gurobi']}
						pictures={['images/bachelor/bachelor.jpg']}
					/>
					<Project
						name="Covid-19 internet"
						short="Resarch and development of a website that illustrates the internet
                        usage of swiss people during the Covid-19 pandemic. The data waas 
                        collected in a national survey and was made available by the swiss
                        federal office for statistics. The website was developed as part of a
                        school project during my sixth semester at FHNW and was done in a team
                        of 2 people."
						tags={['D3.js', 'HTML/CSS/JS']}
						pictures={['images/ivis/IVIS.jpg']}
					/>
					<Project
						name="Ethical nudging"
						short="Research and development of a website that should demonstrate the
                        effectiveness of ethical nudging in the context of cyber security advisories.
                        The website was developed as part of a bachelor thesis precursor and was done in a
                        team of 2 people."
						tags={['Thesis', 'React', 'HTML/CSS/JS']}
						pictures={['images/geiger/GEIGER.jpg']}
					/>
					<Project
						name="Lead manaegment"
						short="Development of a lead management application for Allianz Suisse
                        during my third and fourth semester at FHNW. The project served as an 
                        introduction to the agile development process and was done in a team
                        of 7 people."
						tags={['React', 'Java', 'Spring Boot', 'REST API', 'Agile']}
						pictures={['images/leadtool/Leadtool.jpg']}
					/>
				</section>
			</div>
		</>
	);
}
