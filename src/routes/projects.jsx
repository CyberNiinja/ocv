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
						name="System integrity verifier"
						short="Research and development of a universal model for scheduling 
                        problems, with a website that allows users to formulate their own
                        scheduling problems using the model and connects it to a solver"
						tags={['school', 'C++', 'linux']}
						pictures={['images/siv/SIV.jpg']}
					/>
					<Project
						name="Universal model for scheduling problems"
						short="Research and development of a universal model for scheduling 
                        problems, with a website that allows users to formulate their own
                        scheduling problems using the model and connects it to a solver"
						tags={['Thesis', 'C#', '.NET6', 'Blazor', 'gurobi']}
						pictures={['images/bachelor/bachelor.jpg']}
					/>
					<Project
						name="Internet usage of the swiss population during Covid-19"
						short="Research and development of a universal model for scheduling 
                        problems, with a website that allows users to formulate their own
                        scheduling problems using the model and connects it to a solver"
						tags={['Thesis', 'C#', '.NET6', 'Blazor', 'gurobi']}
						pictures={['images/ivis/IVIS.jpg']}
					/>
					<Project
						name="Ethical nudging in cyber security advisories"
						short="Research and development of a universal model for scheduling 
                        problems, with a website that allows users to formulate their own
                        scheduling problems using the model and connects it to a solver"
						tags={['Thesis', 'C#', '.NET6', 'Blazor', 'gurobi']}
						pictures={['images/geiger/GEIGER.jpg']}
					/>
					<Project
						name="Lead manaegment application"
						short="Research and development of a universal model for scheduling 
                        problems, with a website that allows users to formulate their own
                        scheduling problems using the model and connects it to a solver"
						tags={['Thesis', 'C#', '.NET6', 'Blazor', 'gurobi']}
						pictures={['images/leadtool/Leadtool.jpg']}
					/>
				</section>
			</div>
		</>
	);
}
