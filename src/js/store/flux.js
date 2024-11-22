const ROOT_URL = "https://swapi.tech/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],

			favorites: {
				people: [],
				vehicles: [],
				planets: [],
			},

			popleImg: {
				1: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
				2: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
				3: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
				4: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
				5: "https://starwars-visualguide.com/assets/img/characters/5.jpg",
				6: "https://starwars-visualguide.com/assets/img/characters/6.jpg",
				7: "https://starwars-visualguide.com/assets/img/characters/7.jpg",
				8: "https://starwars-visualguide.com/assets/img/characters/8.jpg",
				9: "https://starwars-visualguide.com/assets/img/characters/9.jpg",
				10: "https://starwars-visualguide.com/assets/img/characters/10.jpg",
			},

			
		},
		actions: {
			getAllPeople: async () => {
				try {
					const response = await fetch(`https://swapi.tech/api/people`);
					const data = await response.json();
					setStore({ people: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getPeopleById: async (id) => {
				try {
					const response = await fetch(`https://swapi.tech/api/people/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			getAllVehicles: async () => {
				try {
					const response = await fetch(`https://swapi.tech/api/vehicles`);
					const data = await response.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getVehicleById: async (id) => {
				try {
					const response = await fetch(`https://swapi.tech/api/vehicles/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			getAllPlanets: async () => {
				try {
					const response = await fetch(`https://swapi.tech/api/planets`);
					const data = await response.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getPlanetById: async (id) => {
				try {
					const response = await fetch(`https://swapi.tech/api/planets/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			toggleFavorite: (data, type) => {
				const { favorites } = getStore();
				switch (type) {
					case "people":
						const isPeopleFavorite = favorites.people.find((favorite) => favorite.result.uid === data.result.uid);
						if (isPeopleFavorite) {
							const newFavorites = favorites.people.filter((favorite) => favorite.result.uid !== data.result.uid);
							setStore({ favorites: { ...favorites, people: newFavorites } });
						} else {
							setStore({ favorites: { ...favorites, people: [...favorites.people, data] } });
						}
						break;
					case "vehicles":
						const isVehicleFavorite = favorites.vehicles.find((favorite) => favorite.result.uid === data.result.uid);
						if (isVehicleFavorite) {
							const newFavorites = favorites.vehicles.filter((favorite) => favorite.result.uid !== data.result.uid);
							setStore({ favorites: { ...favorites, vehicles: newFavorites } });
						} else {
							setStore({ favorites: { ...favorites, vehicles: [...favorites.vehicles, data] } });
						}
						break;
					case "planets":
						const isPlanetFavorite = favorites.planets.find((favorite) => favorite.result.uid === data.result.uid);
						if (isPlanetFavorite) {
							const newFavorites = favorites.planets.filter((favorite) => favorite.result.uid !== data.result.uid);
							setStore({ favorites: { ...favorites, planets: newFavorites } });
						} else {
							setStore({ favorites: { ...favorites, planets: [...favorites.planets, data] } });
						}
						break;
					default:
						break;
				}
			},
		},
	};
};

export default getState;
