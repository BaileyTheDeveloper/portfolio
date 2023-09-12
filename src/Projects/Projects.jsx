import "./projects.css";
import weatherThumbnail from "../images/weather-app-preview.jpg";

function Projects() {
	return (
		<section className="projects-container">
			<h1 className="projects-header">Projects</h1>
			<div className="project-card">
				<img className="project-thumbnail" src={weatherThumbnail} />
				<h2>React Weather App</h2>
				<p>
					A weather application built using React. Demonstrates understanding of
					React hooks, state, and APIs
				</p>
			</div>
			<div className="project-card">
				<img className="project-thumbnail" src={weatherThumbnail} />
				<h2>React Weather App</h2>
				<p>
					A weather application built using React. Demonstrates understanding of
					React hooks, state, and APIs
				</p>
			</div>
			<div className="project-card">
				<img className="project-thumbnail" src={weatherThumbnail} />
				<h2>React Weather App</h2>
				<p>
					A weather application built using React. Demonstrates understanding of
					React hooks, state, and APIs
				</p>
			</div>
		</section>
	);
}
export default Projects;
