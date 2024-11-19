import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



const Card = ({ character }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card" style={{ height: '300px', width: '250px' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">UID: {character.uid}</p>
                <Link to={`/details/${character.uid}`}>
                    <span>Show more</span>
                </Link>
            </div>
        </div>
    )
};

export default Card;