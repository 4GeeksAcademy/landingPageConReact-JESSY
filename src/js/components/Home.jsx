import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>

			<Footer />
		</div>
	);
};

export default Home;