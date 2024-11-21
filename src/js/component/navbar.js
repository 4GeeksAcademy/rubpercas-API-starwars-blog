import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo.png"
import { Context } from "../store/appContext";
import '../../styles/navbar.css';
import favorite from "../../img/favorite-button.png";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<div className="container">
				<Link to="/">
					<img src={logo} height={64} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="favorite-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<img src={favorite} height={64}/>
							<h1 className="position-absolute top-50 start-100 translate-middle badge rounded bg-danger">
								{(store.favorites.people.length + store.favorites.vehicles.length + store.favorites.planets.length) || 0}
								<h1 className="visually-hidden">unread messages</h1>
							</h1>
						</button>
						<ul className="dropdown-menu dropdown-menu-end text-center">
							<li><h6 className="dropdown-header text-danger">People</h6></li>
							{
								store.favorites.people && store.favorites.people.length > 0 ? (
									store.favorites.people.map((item) => (
										<li className="dropdown-item" key={item.result.uid}>
											<Link to={`/people-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="btn-close" onClick={() => actions.toggleFavorite(item, "people")}></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No people favorites yet</li>
								)
							}
							<li><h6 className="dropdown-header text-danger">Planets</h6></li>
							{
								store.favorites.planets && store.favorites.planets.length > 0 ? (
									store.favorites.planets.map((item) => (
										<li className="dropdown-item" key={item.result.uid}>
											<Link to={`/planet-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="btn-close" onClick={() => actions.toggleFavorite(item, "planets")}></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No planets favorites yet</li>
								)
							}
							<li><h6 className="dropdown-header text-danger">Vehicles</h6></li>
							{
								store.favorites.vehicles && store.favorites.vehicles.length > 0 ? (
									store.favorites.vehicles.map((item) => (
										<li className="dropdown-item" key={item.result.uid}>
											<Link to={`/vehicle-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="btn-close" onClick={() => actions.toggleFavorite(item, "vehicles")}></button>
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
