import React, { useContext, useEffect, useState } from 'react'
import defaultImage from '../../img/star-wars-logo.png'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';

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


export const VehicleDetails = () => {
  const { id } = useParams()
  const { actions } = useContext(Context);
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setVehicle(await actions.getVehicleById(id))
    }
    fetchData()
  }, [vehicle])

  return (
    <div className='container'>
      <h1 className='text-light'>Vehicle: {vehicle?.result.properties.name}</h1>
      <div className='row'>
        <div className='col'>
          <div className="card mb-3 bg-secondary">
            <div className="row g-0">
              <div className="col-md-4">
                <img onError={(e) => e.target.src = defaultImage} src={vehicleImages[id]} className="img-fluid rounded-start" alt="Planet image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{vehicle?.result.properties.name}</h5>
                  <p className="card-text">{vehicle?.result.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ul className='list-group list-group-horizontal w-100 '>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Manufacturer</h2>
              <p className='fs-4'>{vehicle?.result.properties.manufacturer}</p>
            </li>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Model</h2>
              <p className='fs-4'>{vehicle?.result.properties.model} cm</p>
            </li>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Passengers</h2>
              <p className='fs-4'>{vehicle?.result.properties.passengers}</p>
            </li>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Cost in credits</h2>
              <p className='fs-4'>{vehicle?.result.properties.cost_in_credits}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}