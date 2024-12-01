import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo.png"
import { Context } from "../store/appContext";
import SearchBar from "./Search";
import '../../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';




export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<img className="starwars-logo p-2" src={logo} height={64} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="favorite-button dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<h2 className="title-favorite me-1">FAVORITES</h2>
							<div className="favorite-container">
								<p className="favorite-count">
									{(store.favorites.people.length + store.favorites.vehicles.length + store.favorites.planets.length) || 0}
								</p>
							</div>

						</button>
						<ul className="dropdown-menu dropdown-menu bg-light border border-dark">
							<li><h2 className="dropdown-header text-dark border-bottom">People</h2></li>
							{
								store.favorites.people && store.favorites.people.length > 0 ? (
									store.favorites.people.map((item) => (
										<li className="dropdown-item d-flex justify-content-between" key={item.result.uid}>
											<Link className="my-link" to={`/people-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="button-del" onClick={() => actions.handleFavorite(item, "people")}><FontAwesomeIcon icon={faTrash} style={{ color: "#000000", }} /></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No people favorites yet</li>
								)
							}
							<li><h2 className="dropdown-header text-dark border-bottom">Planets</h2></li>
							{
								store.favorites.planets && store.favorites.planets.length > 0 ? (
									store.favorites.planets.map((item) => (
										<li className="dropdown-item d-flex justify-content-between" key={item.result.uid}>
											<Link className="my-link" to={`/planets-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="button-del" onClick={() => actions.handleFavorite(item, "planets")}><FontAwesomeIcon icon={faTrash} style={{ color: "#000000", }} /></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No planets favorites yet</li>
								)
							}
							<li><h2 className="dropdown-header text-dark border-bottom">Vehicles</h2></li>
							{
								store.favorites.vehicles && store.favorites.vehicles.length > 0 ? (
									store.favorites.vehicles.map((item) => (
										<li className="dropdown-item d-flex justify-content-between" key={item.result.uid}>
											<Link className="my-link" to={`/vehicles-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="button-del" onClick={() => actions.toggleFavorite(item, "vehicles")}><FontAwesomeIcon icon={faTrash} style={{ color: "#000000", }} /></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No vehicles favorites yet</li>
								)
							}
						</ul>
					</div>
				</div>
				<div>
					<SearchBar data={store} /> 
				</div>
			</div>
		</nav>
	);
};
