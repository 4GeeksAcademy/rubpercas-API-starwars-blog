import React, { useContext } from "react";
import { Context } from "../store/appContext";

const DetailCard = () => {
    const { store, actions } = useContext(Context);
    const person = store.person;
    const properties = store.person.properties;
    console.log(properties);
    return (
        <div className="card" style={{ height: '500px', width: '500px' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">HOLA</h5>
                <p className="card-text">{person.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default DetailCard;