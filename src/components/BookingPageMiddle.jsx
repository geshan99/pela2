import React from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import APackageMiddleCSS from "./APackageMiddle.module.css";
import BookNowComp from "./BookNowComp";
import ForAnyQComp from "./ForAnyQComp";
import "./ContactUsMiddle.css";
import Booking from "../pages/Booking";
import Bookingdetails from "./BookingDetailsComp";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

function BookongPageMiddle({ location }) {
	const [verified, setVerified] = useState(false);
	const messegeText =
		"mailto:sudasinghegeshan@gmail.com?subject=" + location + " Booking";
	//TODO Change reciever email adress

	function onChange() {
		setVerified(true);
	}

	return (
		<Container
			fluid
			className={`bg-blend-multiply px-0 py-4 ${APackageMiddleCSS.aPackageMiddleBackGroundImage}`}
		>
			<Container>
				<Row className="m-0">
					<Col
						className="md-6 m-3 p-4"
						style={{
							backgroundColor: "rgb(245, 247, 246,0.4)",
							borderRadius: "20px",
							border: "solid white 2px",
						}}
					>
						<Form
							action={messegeText}
							method="POST"
							encType="text/plain"
						>
							<Form.Group>
								<Form.Label>Arrival Date</Form.Label>
								<Form.Control
									type="Date"
									placeholder="Arrival Date"
									name="Arrival Date"
									id="arrival date"
									style={{
										borderRadius: "1em",
										backgroundColor:
											"rgb(245, 247, 246,0.7)",
									}}
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Name"
									name="Name"
									id="name"
									style={{
										borderRadius: "1em",
										backgroundColor:
											"rgb(245, 247, 246,0.7)",
									}}
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Contact Number</Form.Label>
								<Form.Control
									type="Telephone"
									placeholder="Contact Number"
									name="Contact Number"
									id="contactNumber"
									style={{
										borderRadius: "1em",
										backgroundColor:
											"rgb(245, 247, 246,0.7)",
									}}
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="Email"
									placeholder="Email"
									name="Email"
									id="email"
									style={{
										borderRadius: "1em",
										backgroundColor:
											"rgb(245, 247, 246,0.7)",
									}}
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>No. of Packs</Form.Label>
								<Form.Control
									type="Number"
									placeholder="No. of Packs"
									name="No. of Packs"
									id="noOfPacks"
									style={{
										borderRadius: "1em",
										backgroundColor:
											"rgb(245, 247, 246,0.7)",
									}}
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Messege</Form.Label>
								<Form.Control
									type="text"
									rows={4}
									placeholder="Messsege"
									name="Messege"
									id="messege"
									as="textarea"
									style={{
										borderRadius: "1em",
										backgroundColor:
											"rgb(245, 247, 246,0.7)",
									}}
								></Form.Control>
							</Form.Group>
							<br></br>

							<ReCAPTCHA
								//TODO change sitekey
								sitekey="6Lf4obseAAAAALCJfmFuP-5YOcMt8v28ftd04Fnu"
								className="recaptcha"
								onChange={onChange}
								onExpired={() => setVerified(false)}
							/>
							<Button
								variant="success"
								className="m-4 btn-lg"
								type="submit"
								value="Send"
								disabled={!verified}
							>
								Enquir Now
							</Button>
						</Form>
					</Col>
					<Col className="md-6 ">
						<Bookingdetails location={location} />
						<ForAnyQComp location={location} />
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default BookongPageMiddle;
