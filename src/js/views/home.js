import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";


import "../../styles/home.css";

const Home = () => {
	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.getPlanets();
		actions.getPeople();
		actions.getFilms();
		actions.getSpecies();
		actions.getStarships();
		actions.getVehicles();
	}, []);

	console.log(store.people);
	console.log(store.planets);
	console.log(store.films);
	console.log(store.species);
	console.log(store.starships);
	console.log(store.vehicles);

	return (
		<div className="text-center mt-5">
			<h1>CHARACTERS</h1>
			<Card />
			<h1>PLANETS</h1>
			<h1>FILMS</h1>
			<h1>SPECIES</h1>
			<h1>STARSHIPS</h1>
			<h1>VEHICLES</h1>
		</div>)
};

export default Home;
