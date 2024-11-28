import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.js";
import loading from "../../img/loading.gif"
import '../../styles/home.css'

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<main className="text-center mt-5 container-fluid">
			<section className="mb-5">
				<div className="row">
					<div className="col">
						<h1 className="section-title mb-2">CHARACTERS</h1>
					</div>
				</div>
				<div className="card-group row row-cols-12 flex-nowrap overflow-auto mt-2">
					{
						store.people && store.people.length > 0
							? store.people.map((character) => (
								<Card key={character.uid} id={character.uid} type="people" />
							)
							) : (
								<div className="d-flex align-items-center justify-content-center">
									<img className="loading-img" src={loading} />
								</div>
							)
					}
				</div>
			</section>

			<section className="mb-5">
				<div className="row">
					<h1 className="section-title mb-2">PLANETS</h1>
				</div>
				<div className="card-group row row-cols-12 flex-nowrap overflow-auto mt-2">
					{
						store.planets && store.planets.length > 0
							? store.planets.map((planet) => (
								<Card key={planet.uid} id={planet.uid} type="planets" />
							)
							) : (
								<div className="d-flex align-items-center justify-content-center">
									<img className="loading-img" src={loading} />
								</div>
							)
					}
				</div>
			</section>

			<section>
				<div className="row">
					<h1 className="mb-2">VEHICLES</h1>
				</div>
				<div className="card-group row row-cols-12 flex-nowrap overflow-auto mt-2">
					{
						store.vehicles && store.vehicles.length > 0
							? store.vehicles.map((vehicle) => (
								<Card key={vehicle.uid} id={vehicle.uid} type="vehicles" />
							)
							) : (
								<div className="d-flex align-items-center justify-content-center">
									<img className="loading-img" src={loading} />
								</div>
							)
					}
				</div>
			</section>
		</main>
	)
};
