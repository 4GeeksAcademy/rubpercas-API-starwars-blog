import React, { useContext, useEffect, useState } from 'react'
import defaultImage from '../../img/star-wars-logo.png'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/peopleDetails.css"

const peopleImg = {
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


export const PeopleDetails = () => {
  const { id } = useParams()
  const { actions } = useContext(Context);
  const [people, setPeople] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setPeople(await actions.getPeopleById(id))
    }
    fetchData()
  }, [people])

  return (
    <>
      <h1 className="text-light text-center mb-4">It's {people?.result.properties.name}!</h1>
      <div className="container-fluid d-flex justify-content-center">
        <div className="myCard">
          <div className="top-card">
            <div className="detail-img">
              <img src={peopleImg[id]} className="img-fluid rounded-start" alt="Planet image" />
            </div>
            <div className="main-info">
              <h5>{people?.result.properties.name}</h5>
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
