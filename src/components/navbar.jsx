import React from 'react';
import './navbar.css';
import { Button, Link } from './button';
import { useMatch } from 'react-router-dom';

export default function Navbar({ nav, onNav, theme, onTheme }) {
	const matchHome = useMatch('/');
	const matchAbout = useMatch('/about');
	const matchProjects = useMatch('/projects');
	const matchContact = useMatch('/contact');
	return (
		<nav className="container">
			<Link
				link="/"
				icon="home"
				className={matchHome ? 'icon__fill' : 'icon__outline'}
				text={matchHome ? 'Home' : ''}
			/>
			<Link
				link="/about"
				icon="person"
				className={matchAbout ? 'icon__fill' : 'icon__outline'}
				text={matchAbout ? 'About' : ''}
			/>
			<Link
				link="/projects"
				icon="work"
				className={matchProjects ? 'icon__fill' : 'icon__outline'}
				text={matchProjects ? 'Projects' : ''}
			/>
			<Link
				link="/contact"
				icon="mail"
				className={matchContact ? 'icon__fill' : 'icon__outline'}
				text={matchContact ? 'Contact' : ''}
			/>
			<div className="spacer"></div>

			<Button
				id="theme-switch"
				className="icon__fill"
				icon={`${theme}_mode`}
				onClick={onTheme}
			/>
		</nav>
	);
}
