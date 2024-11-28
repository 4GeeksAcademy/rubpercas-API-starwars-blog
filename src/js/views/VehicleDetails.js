import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/vehicleDetails.css"


export const VehicleDetails = () => {
  const { id } = useParams()
  const { store, actions } = useContext(Context);
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    let getData = async () => {
      setVehicle(await actions.getVehicleById(id))
    }
    getData()
  }, [id])

  console.log(vehicle);

  return (
    <div className='container'>
      <h1 className='mb-4 mt-4 text-center'>An amazing {vehicle?.result.properties.name} !</h1>
      <div className='row'>
        <div className='col d-flex flex-column align-items-center'>
          <div className="card mb-3">
            <div className="top d-flex align-items-center">
              <img src={store.vehicleImg[id]} className="detail-img" />
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
              <p>{vehicle?.result.properties.model}</p>
            </div>
            <div className='flex-fill text-center'>
              <h5>Capacity</h5>
              <p>{vehicle?.result.properties.passengers}</p>
            </div>
            <div className='flex-fill text-center'>
              <h5>Credits</h5>
              <p>{vehicle?.result.properties.cost_in_credits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}