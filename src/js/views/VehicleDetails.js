import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/vehicleDetails.css"

const vehicleImg = {
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
      <h1 className='mb-4 mt-4 text-center'>An amazing {vehicle?.result.properties.name} !</h1>
      <div className='row'>
        <div className='col d-flex flex-column align-items-center'>
          <div className="card mb-3">
            <div className="top d-flex align-items-center">
              <img src={vehicleImg[id]} className="detail-img" />
              <div className="main-info-text text-center">
                <h2>{vehicle?.result.properties.name}</h2>
                <p>{vehicle?.result.description}</p>
              </div>
            </div>
          </div>
          <div className='info-card d-flex flex-row align-items-center justify-content-around bg-light p-2 w-100'>
            <div className='flex-fill text-center'>
              <h5>Manufacturer</h5>
              <p>{vehicle?.result.properties.manufacturer}</p>
            </div>
            <div className='flex-fill text-center'>
              <h5>Model</h5>
              <p>{vehicle?.result.properties.model} cm</p>
            </div>
            <div className='flex-fill text-center'>
              <h5>Passengers</h5>
              <p>{vehicle?.result.properties.passengers}</p>
            </div>
            <div className='flex-fill text-center'>
              <h5>Cost in credits</h5>
              <p>{vehicle?.result.properties.cost_in_credits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}