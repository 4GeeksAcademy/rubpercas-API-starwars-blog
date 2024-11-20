import React, { useContext, useEffect, useState } from 'react'
import defaultImage from '../../img/star-wars-logo.png'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';

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
      <h1 className='text-light'>Planet: {planet?.result.properties.name}</h1>
      <div className='row'>
        <div className='col'>
          <div className="card mb-3 bg-secondary">
            <div className="row g-0">
              <div className="col-md-4">
                <img onError={(e) => e.target.src = defaultImage} src={planetImages[id]} className="img-fluid rounded-start" alt="Planet image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{planet?.result.properties.name}</h5>
                  <p className="card-text">{planet?.result.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ul className='list-group list-group-horizontal w-100'>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Climate</h2>
              <p className='fs-4'>{planet?.result.properties.climate}</p>
            </li>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Population</h2>
              <p className='fs-4'>{planet?.result.properties.population} habitants</p>
            </li>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Terrain</h2>
              <p className='fs-4'>{planet?.result.properties.terrain}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
