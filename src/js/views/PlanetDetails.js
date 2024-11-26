import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/planetDetails.css"

const planetImg = {
  1: "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
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

export const PlanetDetails = () => {
  const { id } = useParams()
  const { actions } = useContext(Context);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setPlanet(await actions.getPlanetById(id))
    }
    fetchData()
  }, [planet])


  return (
    <div className='container'>
      <h1 className='mb-4 mt-4 text-center'>Welcome to {planet?.result.properties.name} !</h1>
      <div className='row'>
        <div className='col d-flex flex-column align-items-center'>
          <div className="card mb-3">
            <div className="top d-flex align-items-center">
              <img src={planetImg[id]} className="detail-img w-25" />
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
