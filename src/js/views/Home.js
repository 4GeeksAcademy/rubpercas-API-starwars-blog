import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.js";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<main className="text-center mt-5 container">
			<section className="mb-5">
				<div className="row">
					<div className="col">
						<h1 className="text-light">Characters</h1>
					</div>
				</div>
				<div className="row row-cols-12 flex-nowrap overflow-auto">
					{
						store.people && store.people.length > 0
							? store.people.map((character) => (
								<Card key={character.uid} id={character.uid} type="people" />
							)
							) : (
								<h1 className="text-light">No hay personajes para mostrar</h1>
							)
					}
				</div>
			</section>

			<section className="mb-5">
				<div className="row">
					<div className="col">
						<h1 className="text-light">Planets</h1>
					</div>
				</div>
				<div className="row row-cols-12 flex-nowrap overflow-auto">
					{
						store.planets && store.planets.length > 0
							? store.planets.map((planet) => (
								<Card key={planet.uid} id={planet.uid} type="planets" />
							)
							) : (
								<h1 className="text-light">No hay planetas para mostrar</h1>
							)
					}
				</div>
			</section>

			<section>
				<div className="row">
					<div className="col">
						<h1 className="text-light">Vehicles</h1>
					</div>
				</div>
				<div className="row row-cols-12 flex-nowrap overflow-auto">
					{
						store.vehicles && store.vehicles.length > 0
							? store.vehicles.map((vehicle) => (
								<Card key={vehicle.uid} id={vehicle.uid} type="vehicles" />
							)
							) : (
								<h1 className="text-light">No hay vehículos para mostrar</h1>
							)
					}
				</div>
			</section>
		</main>
	)
};
