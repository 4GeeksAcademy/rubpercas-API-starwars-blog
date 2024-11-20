import React, { useContext, useEffect, useState } from 'react'
import defaultImage from "../../img/star-wars-logo.png"
import { Context } from '../store/appContext.js';
import { Link } from 'react-router-dom';

const peopleImages = {
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
}

const planetImages = {
  1: "https://starwars-visualguide.com/assets/img/planets/1.jpg",
  2: "https://starwars-visualguide.com/assets/img/planets/2.jpg",
  3: "https://starwars-visualguide.com/assets/img/planets/3.jpg",
  4: "https://starwars-visualguide.com/assets/img/planets/4.jpg",
  5: "https://starwars-visualguide.com/assets/img/planets/5.jpg",
  6: "https://starwars-visualguide.com/assets/img/planets/6.jpg",
  7: "https://starwars-visualguide.com/assets/img/planets/7.jpg",
  8: "https://starwars-visualguide.com/assets/img/planets/8.jpg",
  9: "https://starwars-visualguide.com/assets/img/planets/9.jpg",
  10: "https://starwars-visualguide.com/assets/img/planets/10.jpg",
}

const vehicleImages = {
  4: "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
  7: "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
  6: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  8: "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
  14: "https://starwars-visualguide.com/assets/img/vehicles/14.jpg",
  18: "https://starwars-visualguide.com/assets/img/vehicles/18.jpg",
  16: "https://starwars-visualguide.com/assets/img/vehicles/16.jpg",
  19: "https://starwars-visualguide.com/assets/img/vehicles/19.jpg",
  20: "https://starwars-visualguide.com/assets/img/vehicles/20.jpg",
  24: "https://starwars-visualguide.com/assets/img/vehicles/24.jpg",
}

export const Card = ({ id, type }) => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (type === "people") {
        setData(await actions.getPeopleById(id))
      } else if (type === "planets") {
        setData(await actions.getPlanetById(id))
      } else if (type === "vehicles") {
        setData(await actions.getVehicleById(id))
      }
    }
    fetchData();
  }, [])

  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }} data-bs-theme="dark">
        <img onError={(e) => e.target.src = defaultImage} src={type === "people" ? peopleImages[id] : type === "planets" ? planetImages[id] : vehicleImages[id]} className="card-img-top" alt="image" />
        <div className="card-body d-flex flex-column justify-content-between" style={{ height: "100%", minHeight: "250px" }}>
          <h5 className="card-title">{data?.result.properties.name}</h5>
          {
            type === "people" && (
              <>
                <p className="card-text">Gender: {data?.result.properties.gender}</p>
                <p className="card-text">Hair Color: {data?.result.properties.hair_color}</p>
                <p className="card-text">Eye Color: {data?.result.properties.eye_color}</p>
                <div className='d-flex justify-content-between'>
                  <Link to={`people-details/${id}`} className="btn btn-primary">Learn more!</Link>
                  <button className='btn btn-primary' onClick={() => actions.toggleFavorite(data, "people")}>
                    {
                      store.favorites.people.find(favorite => favorite.result.properties.name === data?.result.properties.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                    }
                  </button>
                </div>
              </>
            )
          }
          {
            type === "planets" && (
              <>
                <p className="card-text">Population: {data?.result.properties.population}</p>
                <p className="card-text">Terrain: {data?.result.properties.terrain}</p>
                <div className='d-flex justify-content-between'>
                  <Link to={`planet-details/${id}`} className="btn btn-primary">Learn more!</Link>
                  <button className='btn btn-primary' onClick={() => actions.toggleFavorite(data, "planets")}>
                    {
                      store.favorites.planets.find(favorite => favorite.result.uid === data?.result.uid) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                    }
                  </button>
                </div>
              </>
            )
          }
          {
            type === "vehicles" && (
              <>
                <p className="card-text">Model: {data?.result.properties.model}</p>
                <p className="card-text">Manufacturer: {data?.result.properties.manufacturer}</p>
                <div className='d-flex justify-content-between'>
                  <Link to={`vehicle-details/${id}`} className="btn btn-primary">Learn more!</Link>
                  <button className='btn btn-primary' onClick={() => actions.toggleFavorite(data, "vehicles")}>
                    {
                      store.favorites.vehicles.find(favorite => favorite.result.properties.name === data?.result.properties.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                    }
                  </button>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )

}
