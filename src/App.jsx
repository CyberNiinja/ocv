import React from 'react';
import Home from './routes/home';
import About from './routes/about';
import Projects from './routes/projects';
import Contact from './routes/contact';
import Navbar from './components/navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	const [navExpand, setNavExpand] = React.useState(false);
	const toggleNav = () => {
		console.log('should toggle theme');
		setNavExpand(!navExpand);
	};
	const [theme, setTheme] = React.useState(null);
	const setDark = () => {
		localStorage.setItem('theme', 'dark');
		setTheme('dark');
		document.getElementById('root').className = 'dark';
	};
	const setLight = () => {
		localStorage.setItem('theme', 'light');
		setTheme('light');
		document.getElementById('root').className = 'light';
	};
	const toggleTheme = () => {
		theme === 'light' ? setDark() : setLight();
	};
	React.useEffect(() => {
		if (theme) return;
		if (localStorage.getItem('theme') === 'dark') {
			setDark();
			return;
		} else if (localStorage.getItem('theme') === 'light') {
			setLight();
			return;
		} else {
			const isDarkMode =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDarkMode ? setDark() : setLight();
		}
	}, []);

	return (
		<>
			<header>
				<Navbar
					nav={navExpand}
					onNav={toggleNav}
					theme={theme}
					onTheme={toggleTheme}
				/>
			</header>
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" />
				</Routes>
				<Outlet />
			</main>
			<footer>
				<div id="footnote">© Elias Mjøen 2023</div>
			</footer>
		</>
	);
}

export default App;
