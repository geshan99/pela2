import WhereToGoUpper from "../components/WhereToGoUpper";
import ademspeak from "../assets/What to do/Top photo/cover-for-adams-peak.jpg";
import WhatToDpMiddle from "./WhatToDoMiddle";

function WhatToDo() {
	return (
		<div>
			<WhereToGoUpper
				backPhoto={ademspeak}
				title="What to do"
				type="type2"
			/>
			<WhatToDpMiddle />
		</div>
	);
}

export default WhatToDo;
