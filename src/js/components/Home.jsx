import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            Home component
			<SecondsCounter />

		</div>
	);
};

export default Home;