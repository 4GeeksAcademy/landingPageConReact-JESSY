import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const CardData =
	[
		{
			id: 1,
			title: "Card 1",
			description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
			img: "https://placehold.co/500X325"
		},

		{
			id: 2,
			title: "Card 2",
			description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos.",
			img: "https://placehold.co/500X325"
		},

		{
			id: 3,
			title: "Card 3",
			description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera .",
			img: "https://placehold.co/500X325"
		},

		{
			id: 4,
			title: "Card 4",
			description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
			img: "https://placehold.co/500X325"
		},
	]


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row justify-content-center mt-3">
					{CardData.map(cardInfo => (
						<div key={cardInfo.id} className="col-lg-3 col-md-6 col-sm-12 mb-2">
							<Card cardInfo={cardInfo} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;