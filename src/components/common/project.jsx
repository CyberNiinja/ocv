import React from 'react';
import './project.css';
import { Button } from './button';
export default function Project({ name, pictures, short, tags, children }) {
	const [show, setShow] = React.useState(false);
	const [pics, setPics] = React.useState(pictures);
	const toggle = () => {
		setShow(!show);
	};
	return (
		<article className="project">
			<div className="button-container">
				<Button
					onClick={toggle}
					className="project-button"
					aria-label="Show project details"></Button>
			</div>

			<div className="project-picture">
				<img src={pics[0]} alt=""></img>
			</div>
			<div className="textwrap">
				<i></i>
				<h4 className="project-name">{name}</h4>
				{!show && <div className="project-short">{short}</div>}
			</div>

			<div className="project-tags">
				{tags?.map((tag, index) => (
					<span className="tag" key={index}>
						{tag}
					</span>
				))}
			</div>
			<div className="project-details">{children}</div>
		</article>
	);
}
