import React from 'react';
import './project.css';
export default function Project({ name, pictures, short, tags, children }) {
	const [show, setShow] = React.useState(false);
	return (
		<article className="project">
			{!show && (
				<>
					<div className="project__content">
						<h3>{name}</h3>
						<h5>
							{tags?.map((tag) => (
								<span>&#91;{tag}&#93; </span>
							))}
						</h5>
						<div className="project__image__container">
							<img className="project__image" src={pictures} alt=""></img>
						</div>
						<p>{short}</p>
						<br></br>
					</div>
				</>
			)}
		</article>
	);
}
