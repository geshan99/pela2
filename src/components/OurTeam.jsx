import { Col, Container, Image, Row } from "react-bootstrap";
import galle from "../assets/Where to go/Photos for circles/Galle.jpg";

function OurTeam() {
	return (
		<div>
			<Container>
				<Row>
					<Col className="mx-5 mb-3">
						<Image src={galle} className="teamimage" />
					</Col>
					<Col className="mx-5 my-3">
						<Image src={galle} className="teamimage" />
					</Col>
					<Col className="mx-5 my-3">
						<Image src={galle} className="teamimage" />
					</Col>
				</Row>
				<Row className="last-photo-row">
					<Col className="mx-5 my-3">
						<Image src={galle} className="teamimage" />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default OurTeam;
