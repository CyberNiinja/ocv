import React from 'react';
import './work.css';
import Project from '../common/project';
function Work() {
	return (
		<section id="work">
			<h3>Work</h3>
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
	);
}

export default Work;
