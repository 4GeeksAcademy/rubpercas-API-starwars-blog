import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";
import { useParams } from "react-router";

import "../../styles/home.css";

const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	useEffect(() => {
		actions.getPeople();
		actions.getPerson();
		// actions.getPlanets();
		// actions.getFilms();
		// actions.getSpecies();
		// actions.getStarships();
		// actions.getVehicles();
	}, []);

	console.log(store.people);
	console.log(store.person);
	// console.log(store.planets);
	// console.log(store.films);
	// console.log(store.species);
	// console.log(store.starships);
	// console.log(store.vehicles);

	return (
		<div className="text-center mt-5">
			<h1>CHARACTERS</h1>
			<div>
				<ul className="list-group mt-3">
					<div className="card-container">
						{store.people && store.people.length > 0 && store.people.map((character) => {
							return (
								<Card character={character} key={character.uid} />
							)
						})}
					</div>
				</ul>

				<h1>PLANETS</h1>
				<h1>FILMS</h1>
				<h1>SPECIES</h1>
				<h1>STARSHIPS</h1>
				<h1>VEHICLES</h1>
			</div>
		</div >

	)
};

export default Home;
