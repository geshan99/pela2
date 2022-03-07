import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HolidayPackagesMiddleCSS from "./HolidayPackagesMiddle.module.css";
import "./ContactUsMiddle.css";
import LocationComp from "./LocationComp";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { ScaleControl } from "react-leaflet";

function ContactUsMiddle() {
	const [verified, setVerified] = useState(false);

	function onChange(value) {
		console.log("Captcha value:", value);
		setVerified(true);
	}
	return (
		<div>
			<Container
				fluid
				className={
					HolidayPackagesMiddleCSS.holidayPackagesMiddleBackGroundImage
				}
			>
				<center>
					<Row className="mt-5">
						<Col>
							<div className="first-row pl-0">
								<ul className="py-1 text-left">
									<li>Address</li>
									<li>Telephone</li>
									<li>E-mail</li>
								</ul>
							</div>
						</Col>
						<Col>
							<LocationComp width="18vw" height="18vw" />
						</Col>
					</Row>
					<Row>
						<Col className="p-0">
							<div
								style={{
									backgroundColor: "#61FFFF66",
									width: "100vw",
									marginLeft: "0px",
								}}
							>
								<h2>Get in Touch</h2>
							</div>
						</Col>
					</Row>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							margin: "0.7em",
							maxWidth: "1200px",
						}}
					>
						<Form
							action="mailto:sudasinghegeshan@gmail.com?subject=Contact form Data"
							//TODO Change reciever email adress
							method="POST"
							encType="text/plain"
						>
							<Row
								style={{
									width: "75vw",
									backgroundColor: "rgb(245, 247, 246,0.5)",
									borderRadius: "20px",
									border: "solid white 4px",
									padding: "2em",
								}}
							>
								<Col className="col-md-6 p-3">
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											Name
										</Form.Label>
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
										/>
									</Form.Group>
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											Contact Number
										</Form.Label>
										<Form.Control
											type="Telephone"
											name="Contact No"
											placeholder="Contact Number"
											style={{
												borderRadius: "1em",
												backgroundColor:
													"rgb(245, 247, 246,0.7)",
											}}
										/>
									</Form.Group>
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											Email
										</Form.Label>
										<Form.Control
											type="Email"
											placeholder="Email"
											name="Email"
											style={{
												borderRadius: "1em",
												backgroundColor:
													"rgb(245, 247, 246,0.7)",
											}}
										/>
									</Form.Group>
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											Country
										</Form.Label>
										<Form.Control
											type="text"
											placeholder="Country"
											name="Country"
											style={{
												borderRadius: "1em",
												backgroundColor:
													"rgb(245, 247, 246,0.7)",
											}}
										/>
									</Form.Group>
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											Arrival Date
										</Form.Label>
										<Form.Control
											type="Date"
											name="Arrival Date"
											placeholder="Arrival Date"
											style={{
												borderRadius: "1em",
												backgroundColor:
													"rgb(245, 247, 246,0.7)",
											}}
										/>
									</Form.Group>
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											Departure Date
										</Form.Label>
										<Form.Control
											type="Date"
											name="Departure Date"
											placeholder="DepartureDate"
											style={{
												borderRadius: "1em",
												backgroundColor:
													"rgb(245, 247, 246,0.7)",
											}}
										/>
									</Form.Group>
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											People Count
										</Form.Label>
										<Form.Control
											type="Number"
											name="People Count"
											placeholder="PeopleCount"
											style={{
												borderRadius: "1em",
												backgroundColor:
													"rgb(245, 247, 246,0.7)",
											}}
										/>
									</Form.Group>
								</Col>
								<Col className="col-md-6 ">
									<Form.Group className="mb-4">
										<Form.Label className="d-flex">
											Messege
										</Form.Label>
										<Form.Control
											type="text"
											name="Messege"
											placeholder="Messege"
											as="textarea"
											rows={5}
											style={{
												borderRadius: "1em",
												backgroundColor:
													"rgb(245, 247, 246,0.7)",
											}}
										/>
									</Form.Group>
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
										Submit
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</center>
			</Container>
		</div>
	);
}

export default ContactUsMiddle;
