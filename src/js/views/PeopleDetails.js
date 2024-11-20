import React, { useContext, useEffect, useState } from 'react'
import defaultImage from '../../img/star-wars-logo.png'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';

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
    <div className='container'>
      <h1 className='text-light'>Character: {people?.result.properties.name}</h1>
      <div className='row'>
        <div className='col'>
          <div className="card mb-3 bg-secondary">
            <div className="row g-0">
              <div className="col-md-4">
                <img onError={(e) => e.target.src = defaultImage} src={peopleImages[id]} className="img-fluid rounded-start" alt="Planet image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{people?.result.properties.name}</h5>
                  <p className="card-text">{people?.result.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ul className='list-group list-group-horizontal w-100'>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Gender</h2>
              <p className='fs-4'>{people?.result.properties.gender}</p>
            </li>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Height</h2>
              <p className='fs-4'>{people?.result.properties.height} cm</p>
            </li>
            <li className='col list-group-item list-group-item-secondary text-center'>
              <h2>Skin Color</h2>
              <p className='fs-4'>{people?.result.properties.skin_color}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
