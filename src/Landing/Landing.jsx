import "./landing.css";
import portrait from "../images/selfportait.jpg";
function Landing() {
	return (
		<section className="landing-container">
			<img src={portrait} className="landing-portait"/>
			<div className="header-container">
				<h2 className="small-header">Hi, I'm</h2>
				<h1 className="name-header">Bailey Pointer</h1>
				<h3 className="small-header">Software Developer</h3>
			</div>
		</section>
	);
}

export default Landing;
