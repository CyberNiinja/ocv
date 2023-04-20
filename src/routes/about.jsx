import React from 'react';
import { Button, Link } from '../components/button';
import './about.css';

function About() {
	const [childhoodOpen, setChildhoodOpen] = React.useState(true);
	const [hobbiesOpen, setHobbiesOpen] = React.useState(false);
	const [careerOpen, setCareerOpen] = React.useState(false);
	return (
		<>
			<div className="heading">
				<h1>About Me</h1>
				<h2>Myself & I</h2>
				<p>
					If you want to know more about me, you've come to the right place.
					Here you can find out about my childhood, my hobbies and my career up
					to now. If you think I might be a good fit for your company, feel free
					to download my{' '}
					<Link
						className="inline"
						link="../CV-English.pdf"
						download="CV_Elias_Mjoen.pdf"
						icon="download"
						text="CV"
					/>{' '}
					or contact me.
				</p>
			</div>
			<div className="content container">
				<section id="childhood">
					<div className="header-link">
						<h3>Childhood</h3>
						<Button
							onClick={() => setChildhoodOpen(!childhoodOpen)}
							icon={childhoodOpen ? 'expand_less' : 'expand_more'}
						/>
					</div>

					{childhoodOpen && (
						<>
							<div className="image-container">
								<img className="image" src="images/childhood.jpg" alt=""></img>
							</div>
							<p>
								I was born on the fifth of August 1998 in the city of Baden,
								Switzerland. I grew up in a small town called Wildegg with my
								norwegian father and swiss mother and my two little brothers. I
								spent a large part of my early childhood on my uncle's farm
								&#40;as my parents were both working&#41;, where I learned to
								appreciate the beauty of nature and the importance of hard work.
								During my kindergarden and primary school years you would find
								me with my friends and brothers in the neighborhood or the
								nearby forest.
								<br></br>
								<br></br>
								Always having been a technically inclined boy, I was naturally
								fascinated when my father introduced me to the world of
								computers. It didnt take long until I got my hands on a computer
								of my own and started adventuring into the seemingly infinite
								depths of the internet. Whether it was playing games, reading
								about new concepts or just listening to music, computers became
								an influental part of my teenage years.
							</p>
						</>
					)}
				</section>
				<section id="hobbies">
					<div className="header-link">
						<h3>Hobbies</h3>
						<Button
							onClick={() => setHobbiesOpen(!hobbiesOpen)}
							icon={hobbiesOpen ? 'expand_less' : 'expand_more'}
						/>
					</div>
					{hobbiesOpen && (
						<div>
							<div className="image-container">
								<img className="image" src="images/Hobbies.jpg" alt=""></img>
							</div>
							<p>
								In primary school I was a member of the local soccer team and
								played for a few years, after which I dipped my toes into
								table-tennis and kung-fu. I also took piano lessons for all my
								school years and participated in the annual theater play of the
								local church a few times &#40;I even got to play the lead role a
								few times&#41;.
								<br></br>
								<br></br>While I still spend a lot of time online, I have a
								close group of friends and a good connection to my family, which
								keeps me socially active. With my friends I often play board-,
								card- and video-games, and like most I also watch movies and
								series and even read the occasional book when I'm alone. I
								genuinely love music and my Spotify is playing almost 24/7.{' '}
								<Link
									className="inline"
									link="https://open.spotify.com/user/cyberniinja?si=7498d95d22e440e0"
									text="Check it out!"
								/>{' '}
								&#40;seriously, my Spotify statistics are a bit scary&#41;.{' '}
								<br></br>
								<br></br> In winter I spend at least one week on my snowboard in
								the alps and in summer I like to go hiking or camping. I also
								love travelling and would generally describe myself as an
								adventourous and explorative person.
							</p>
						</div>
					)}
				</section>
				<section id="carreer">
					<div className="header-link">
						<h3>Carreer</h3>
						<Button
							onClick={() => setCareerOpen(!careerOpen)}
							icon={careerOpen ? 'expand_less' : 'expand_more'}
						/>
					</div>
					{careerOpen && (
						<div>
							<div className="image-container">
								<img className="image" src="images/carreer.jpg" alt=""></img>
							</div>
							<h4>
								BSc in Computer Science &#40;Spec. in design & management&#41;
							</h4>
							<h5>
								University of Applied Sciences and Art North-western Switzerland
								FHNW School of Engineering &#40;09/2019 - 03/2023&#41;
							</h5>
							<p>
								During my seven semesters at FHNW I enhanced my skills as a
								software engineer, designer, and programmer and was able to
								participate in projects like:
								<ul>
									<li>
										Creation of lead management application for Allianz Suisse
										&#40;React front-end & Spring Boot API&#41;
									</li>
									<li>
										Research for and Development of a CyberSec info-website
										&#40;React&#41;
									</li>
									<li>
										Research for and Development of a general model for
										scheduling problems &#40;Bachelor’s thesis&#41; &#40;C# .NET
										6 & Gurobi Optimizer&#41;
									</li>
								</ul>
							</p>
							<h4>Software Engineer &#40;C# .NET WPF &#41;</h4>
							<h5>Mammut Soft Computing AG &#40;08/2017 - 12/2018&#41;</h5>
							<p>
								First as Intern and then as fulltime employee I worked as a .NET
								developer, building small desktop &#40;and web&#41;
								applications.
							</p>
							<br></br>
							<h4>EFZ Application Developer & BM &#40;commerce&#41; </h4>
							<h5>
								Old Cantonal School Aarau & BBBaden &#40;08/2014 - 06/2018&#41;
							</h5>
							<p>
								I took my first step into the world of computer science after
								mandatory school was a program called IMS
								&#40;Informatikmittelschule&#41; where I learned a lot of
								fundamentals in subjects like:
								<ul>
									<li>HTML, CSS, JS OOP &#40;Java, C#&#41;</li>
									<li>Databases &#40;SQL&#41;</li>
									<li>
										Software engineering &#40;Requirements, Project
										management&#41;
									</li>
									<li>
										Computer Systems &#40;Binary/Hex, Networks, History&#41;
									</li>
								</ul>
								I also completed the following language diplomas:
								<ul>
									<li>
										English: Cambridge CAE &#40;C1 - Assessed to be C2&#41;{' '}
									</li>
									<li>French: Delf B2</li>
								</ul>
							</p>
							<h4>Mandatory Education &#40;Bez. Diploma&#41;</h4>
							<h5>Kreisschule Kestenberg &#40;08/2017 - 12/2018&#41;</h5>
							<p>
								After going to primary school I was submitted to the highest
								middle school track &#40;Bezirkschule&#41;.
							</p>
						</div>
					)}
				</section>
			</div>
		</>
	);
}
export default About;
