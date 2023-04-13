import React from 'react';
import Home from './components/home/home';
import About from './components/about/about';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Navbar from './components/common/navbar';
import { Link } from './components/common/button';
import './App.css';

function App() {
	const [theme, setTheme] = React.useState(null);

	const getTheme = () => {
		if (theme) {
			return;
		}
		const ls = localStorage.getItem('theme');
		if (ls === 'dark' || ls === 'light') {
			setTheme(ls);
			return;
		}
		const isDarkMode =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		console.log(isDarkMode);
		isDarkMode ? setTheme('dark') : setTheme('light');
	};

	React.useEffect(() => {
		getTheme();
	}, []);
	return (
		<div className={theme}>
			<Navbar theme={theme} onTheme={(x) => setTheme(x)} />
			<main>
				<Home />
				<About />
				<Work />
				<Contact />
			</main>
		</div>
	);
}

export default App;
