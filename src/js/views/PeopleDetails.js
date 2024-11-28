import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/peopleDetails.css"


export const PeopleDetails = () => {
  const { id } = useParams()
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setPeople(await actions.getPeopleById(id))
    }
    fetchData()
  }, [])

  return (
    <>
      <h1 className="text-center mb-4 mt-4">It's {people?.result.properties.name} !</h1>
      <div className="container-fluid d-flex justify-content-center">
        <div className="myCard">
          <div className="top-card">
            <div className="detail-img">
              <img src={store.peopleImg[id]} className="img-fluid" />
            </div>
            <div className="main-info">
              <h3>{people?.result.properties.name}</h3>
              <p>{people?.result.description}</p>
            </div>
            <div className="extra-info-container">
              <div className="extra-info">
                <h4 className="m-0">Gender</h4>
                <p className="text-center m-0">{people?.result.properties.gender}</p>
              </div>
              <div className="extra-info">
                <h4 className="m-0">Height</h4>
                <p className="text-center m-0">{people?.result.properties.height} cm</p>
              </div>
              <div className="extra-info">
                <h4 className="m-0">Skin Color</h4>
                <p className="text-center m-0">{people?.result.properties.skin_color}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
