import linkedinlogo from "../images/linkedinlogo.png"
import "./contact.css"

function Contact(){
    return (
			<aside>
				<div className = "contact-logo-container">
					<div className="contact-logo-wrapper">
						<img className="contact-logos" src={linkedinlogo} />
						<img className="contact-logos" src={linkedinlogo} />
						<img className="contact-logos" src={linkedinlogo} />
					</div>
				</div>
			</aside>
		);   
}

export default Contact