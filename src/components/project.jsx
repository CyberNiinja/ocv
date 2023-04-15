import React from 'react';
import './project.css';
export default function Project({ name, picture, short, tags, children }) {
	const [show, setShow] = React.useState(false);
	return (
		<article className="project">
			{!show && (
				<div className="project-image-container">
					<img className="project-image" src={picture} alt=""></img>
					<div className="project-content">
						<h4>{name}</h4>
						<p>{short}</p>
					</div>
				</div>
			)}
		</article>
	);
}
