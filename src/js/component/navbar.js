import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo.png"
import { Context } from "../store/appContext";
import '../../styles/navbar.css';
import favorite from "../../img/favorite-button.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';   




export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<img className="starwars-logo"src={logo} height={64} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="favorite-button dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<img style={{ height: '100px'}} src={favorite} height={64}/>
							<h6 className="rounded bg-danger p-1 ms-2 mt-0">
								{(store.favorites.people.length + store.favorites.vehicles.length + store.favorites.planets.length) || 0}
							</h6>
						</button>
						<ul className="dropdown-menu dropdown-menu-end bg-light">
							<li><h2 className="dropdown-header text-dark">People</h2></li>
							{
								store.favorites.people && store.favorites.people.length > 0 ? (
									store.favorites.people.map((item) => (
										<li className="dropdown-item d-flex justify-content-between" key={item.result.uid}>
											<Link className="my-link" to={`/people-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="button-del" onClick={() => actions.toggleFavorite(item, "people")}><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No people favorites yet</li>
								)
							}
							<li><h2 className="dropdown-header text-dark">Planets</h2></li>
							{
								store.favorites.planets && store.favorites.planets.length > 0 ? (
									store.favorites.planets.map((item) => (
										<li className="dropdown-item d-flex justify-content-between" key={item.result.uid}>
											<Link className="my-link" to={`/planet-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="button-del" onClick={() => actions.toggleFavorite(item, "planets")}><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No planets favorites yet</li>
								)
							}
							<li><h2 className="dropdown-header text-dark">Vehicles</h2></li>
							{
								store.favorites.vehicles && store.favorites.vehicles.length > 0 ? (
									store.favorites.vehicles.map((item) => (
										<li className="dropdown-item d-flex justify-content-between" key={item.result.uid}>
											<Link className="my-link" to={`/vehicle-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="button-del" onClick={() => actions.toggleFavorite(item, "vehicles")}><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No vehicles favorites yet</li>
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
