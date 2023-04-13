import React from 'react';
import './button.css';

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
	const { text, children, className, id, link, icon, download } = props;
	return (
		<a
			href={link ?? ''}
			id={id ?? ''}
			className={`btn ${className ?? ''}`}
			download={download}>
			{(children || icon) && (
				<div className="btn-icon-container">
					{icon ? <div className="material-symbols-outlined">{icon}</div> : ''}
					{children ?? ''}
				</div>
			)}
			{text ? <div className="btn-text-container">{text}</div> : ''}
		</a>
	);
}
export { Link, Button };
