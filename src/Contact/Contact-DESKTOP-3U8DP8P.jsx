import linkedinlogo from "../images/linkedinlogo.png"
import "./contact.css"

function Contact(){
    return (
			<aside>
				<div className="contact-logo-container">
					<img className="contact-logos" src={linkedinlogo} />
					<img className="contact-logos" src={linkedinlogo} />
					<img className="contact-logos" src={linkedinlogo} />
				</div>
			</aside>
		);   
}

export default Contact