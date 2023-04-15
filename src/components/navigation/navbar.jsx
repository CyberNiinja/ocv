import React from 'react';
import './navbar.css';
import { Button, Link } from '../button';

export default function Navbar({ nav, toggleNav, theme, onTheme }) {
	return (
		<div>
			<Link to="/" id="logo" text="Elias Mj&oslash;en"></Link>
			<Button id="theme-switch" icon={`${theme}_mode`} onClick={onTheme} />
			<Button id="nav-toggle" onClick={toggleNav}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="nav-toggle-icon"
					fill="currentColor"
					viewBox="0 96 960 960">
					<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
				</svg>
			</Button>
		</div>
	);
}
