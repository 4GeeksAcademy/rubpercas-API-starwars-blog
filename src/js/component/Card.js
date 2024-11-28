import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext.js';
import { Link } from 'react-router-dom';


export const Card = ({ id, type }) => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (type === "people") {
        setData(await actions.getPeopleById(id))
      } else if (type === "planets") {
        setData(await actions.getPlanetById(id))
      } else if (type === "vehicles") {
        setData(await actions.getVehicleById(id))
      }
    }
    getData();
  }, [])

  return (
    <div className="col general-card mt-4 mb-4">
      <div
        className="card mb-3"
        style={{ width: "18rem" }}
        data-bs-theme="dark">
        <div className="d-flex align-items-center justify-content-center">
          <img
            src={type === "people" ? store.peopleImg[id] :
              type === "planets" ? store.planetsImg[id] :
                store.vehiclesImg[id]}
            className="card-img-top"/>
        </div>
        <div
          className="card-body d-flex flex-column justify-content-between align-items-start p-2"
          style={{ height: "100%", minHeight: "250px" }}>
          <h3 className="card-title text-center w-100">{data?.result.properties.name}</h3>
          {
            type === "people" && (
              <>
                <p className="card-text"><strong>Gender:</strong> {data?.result.properties.gender}</p>
                <p className="card-text"><strong>Hair Color:</strong> {data?.result.properties.hair_color}</p>
                <p className="card-text"><strong>Eye Color:</strong> {data?.result.properties.eye_color}</p>
                <div className='d-flex justify-content-between w-100'>
                  <Link to={`people-details/${id}`}
                    className="btn btn-dark border border-secondary">
                    More info
                  </Link>
                  <button
                    className='btn btn-danger border border-secondary'
                    onClick={() => actions.toggleFavorite(data, "people")}>
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
                <p className="card-text"><strong>Population:</strong> {data?.result.properties.population}</p>
                <p className="card-text"><strong>Terrain:</strong> {data?.result.properties.terrain}</p>
                <div className='d-flex justify-content-between w-100 align-self-end'>
                  <Link to={`planet-details/${id}`}
                    className="btn btn-dark border border-secondary">
                    More info
                  </Link>
                  <button
                    className='btn btn-danger border border-secondary'
                    onClick={() => actions.toggleFavorite(data, "planets")}>
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
                <p className="card-text"><strong>Model:</strong> {data?.result.properties.model}</p>
                <p className="card-text text-start"><strong>Manufacturer:</strong> {data?.result.properties.manufacturer}</p>
                <div className='d-flex justify-content-between w-100'>
                  <Link to={`vehicle-details/${id}`}
                    className="btn btn-dark border border-secondary">
                    More info
                  </Link>
                  <button className='btn btn-danger border border-secondary'
                    onClick={() => actions.toggleFavorite(data, "vehicles")}>
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
