import React from 'react';
import './button.css';
import { Link as RL } from 'react-router-dom';

function Button(props) {
	const { text, children, className, id, onClick, icon } = props;
	return (
		<button
			id={id ?? ''}
			className={`btn ${className ?? ''}`}
			onClick={onClick}>
			{(children || icon) && (
				<div className="btn-icon-container">
					{icon ? <div className="material-symbols-outlined">{icon}</div> : ''}
					{children ?? ''}
				</div>
			)}
			{text ? <span className="btn-text-container">{text}</span> : ''}
		</button>
	);
}

function Link(props) {
	const { text, children, className, id, link, icon, download, ref } = props;
	return (
		<RL
			to={link ?? ''}
			id={id ?? ''}
			className={`btn ${className ?? ''}`}
			download={download ?? ''}
			target={download ? '_blank' : ''}
			end>
			{(children || icon) && (
				<span className="btn-icon-container">
					{icon ? (
						<span className="material-symbols-outlined">{icon}</span>
					) : (
						''
					)}
					{children ?? ''}
				</span>
			)}
			{text ? <span className="btn-text-container">{text}</span> : ''}
		</RL>
	);
}

export { Link, Button };
