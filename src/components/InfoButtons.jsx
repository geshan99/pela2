import React from "react";
import { Button, Col } from "react-bootstrap";

function infoButtons({ link, title, textColor, color }) {
	return (
		<Col
			className={`col-7 font-1 d-flex  justify-content-center col-5 col-sm-5 col-md-4 col-lg-3 p-1 my-4 text-${textColor} `}
		>
			<button
				style={{
					backgroundColor: color,
					width: "20em",
					borderRadius: "50px",
					border: "none",
				}}
			>
				<a
					style={{ textDecoration: "none", color: textColor }}
					href={link}
				>
					{title}
				</a>
			</button>
		</Col>
	);
}

export default infoButtons;
