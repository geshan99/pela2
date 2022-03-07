import Footer from "../components/Footer";
import fishing from "../assets/ContactUs/Stilt fishing.jpg";
import WhereToGoUpper from "../components/WhereToGoUpper";
import ContactUsMiddle from "../components/ContactUsMiddle";

function Contact() {
	return (
		<div>
			<WhereToGoUpper title={"Contact Us"} backPhoto={fishing} />
			<ContactUsMiddle />
			<Footer />
		</div>
	);
}

export default Contact;
