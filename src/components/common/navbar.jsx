import React from 'react';
import './navbar.css';
import { Button } from '../common/button';

export default function Navbar({ theme, onTheme }) {
	const [active, setActive] = React.useState(0);
	const [expanded, setExpanded] = React.useState(false);
	return (
		<header className={`${expanded ? 'expanded' : ''}`}>
			<div id="logo">
				<h3>Elias Mjøen</h3>
			</div>
			<nav>
				<Button
					id="nav-about"
					icon="person"
					className={active === 1 ? 'active' : ''}
					onClick={() => {
						setActive(1);
						window.location.href = '/#about';
					}}></Button>
				<Button
					id="nav-work"
					icon="work"
					className={active === 2 ? 'active' : ''}
					onClick={() => {
						setActive(2);
						window.location.href = '/#work';
					}}></Button>
				<Button
					id="nav-contact"
					icon="mail"
					className={active === 3 ? 'active' : ''}
					onClick={() => {
						setActive(3);
						window.location.href = '/#contact';
					}}></Button>
			</nav>
			<Button
				id="theme-switch"
				icon={`${theme}_mode`}
				onClick={() => {
					theme === 'light' ? onTheme('dark') : onTheme('light');
				}}
			/>
			<Button
				icon={`${expanded ? 'close' : 'menu'}`}
				id="nav-toggle"
				onClick={() => {
					setExpanded(!expanded);
				}}
			/>
		</header>
	);
}
