import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";
import { Context } from "../store/appContext";

const Card3 = (props) => {
  const { store, actions } = useContext(Context);
	return (
     <div className="container col-xs-12 col-md-4 col-3 m-2">
		  <div className="card" style={{width: "22rem"}}>
         <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.id+".jpg"} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="card-text">
            <br /> Passengers:{props.pasajeros}
            <br /> Speed: {props.velocidad+"km/h"}
          </p>
          <div className="row">
						<div className="col-6">
          <Link to={"/demovehiculo/"+props.id}  className="btn btn-outline-primary me-4 ms-3">Learn More!</Link>
          </div>
          <div className="col-6">
          <button type="button" onClick={() => actions.agregarFavoritos(props.nombre)} className="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
         </div>
     </div>
			</div>
      </div>
	);
};

export default Card3