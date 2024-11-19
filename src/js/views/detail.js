import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import DetailCard from "../component/DetailCard";


import "../../styles/home.css";
import { useParams } from "react-router";

const Detail = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getPerson(uid);
    }, [uid]);

    return (
        <div className="text-center mt-5">
            <h1>CHARACTERS</h1>
            <div>
                <DetailCard />
            </div>
        </div >

    )
};

export default Detail;
