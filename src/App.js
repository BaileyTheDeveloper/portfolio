import "./App.css";
import Contact from "./Contact/Contact";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Projects from "./Projects/Projects";

function App() {
	return (
		<main className="app-container">
			<Contact />
			<Landing />
			<About />
			<Projects />
		</main>
	);
}

export default App;
