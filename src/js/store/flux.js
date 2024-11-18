const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			films: [],
			species: [],
			starships: [],
			vehicles: []
		},
		actions: {
			getPeople: async () => {
				const response = await fetch ("https://www.swapi.tech/api/people/");
				const result = await response.json();
				
				setStore({ people: result.results });
			},
			getPlanets: async () => {
				const response = await fetch ("https://www.swapi.tech/api/planets/");
				const result = await response.json();
				
				setStore({ planets: result.results });
			},
			getFilms: async () => {
				const response = await fetch ("https://www.swapi.tech/api/films/");
				const result = await response.json();
				
				setStore({ films: result.result });
			},
			getSpecies: async () => {
				const response = await fetch ("https://www.swapi.tech/api/species/");
				const result = await response.json();
				
				setStore({ species: result.results });
			},
			getStarships: async () => {
				const response = await fetch ("https://www.swapi.tech/api/starships/");
				const result = await response.json();
				
				setStore({ starships: result.results });
			},
			getVehicles: async () => {
				const response = await fetch ("https://www.swapi.tech/api/vehicles/");
				const result = await response.json();
				
				setStore({ vehicles: result.results });
			},
			setFavs: () => {
				
			},
			
		}
	}
};


export default getState;
