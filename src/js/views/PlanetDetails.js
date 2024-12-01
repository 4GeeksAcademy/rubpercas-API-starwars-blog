import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/planetDetails.css"


export const PlanetDetails = () => {
  const { id } = useParams()
  const { store, actions } = useContext(Context);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setPlanet(await actions.getPlanetById(id))
    }
    fetchData()
  }, [id])

  return (
    <div className='container'>
      <h1 className='mb-4 mt-4 text-center'>Welcome to {planet?.result.properties.name} !</h1>
      <div className='row'>
        <div className='col d-flex flex-column align-items-center'>
          <div className="card mb-3">
            <div className="top d-flex align-items-center">
              <img src={store.planetsImg[id]} className="detail-img w-25" />
              <div className="main-info-text text-center">
                <h2>{planet?.result.properties.name}</h2>
                <p>{planet?.result.description}</p>
              </div>
            </div>
          </div>
          <div className='info-card d-flex flex-row align-items-center justify-content-around bg-light p-2 w-100'>
            <div className='flex-fill text-center'>
              <h5>Climate</h5>
              <p>{planet?.result.properties.climate}</p>
            </div>
            <div className='flex-fill text-center'>
              <h5>Population</h5>
              <p>{planet?.result.properties.population}</p>
            </div>
            <div className='flex-fill text-center'>
              <h5>Terrain</h5>
              <p>{planet?.result.properties.terrain}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
