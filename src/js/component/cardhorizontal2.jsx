import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";

export const CardHorizontalplaneta1 = (props) => {
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={logo} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="card-body">
              <h1 className="fs-1">{props.nombreplaneta}</h1>
              <p className="card-text"> {props.descripcion}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="container text-center text-white border-top-warning ">
                <div className="row border-top-warning">
                <div className="col-sm-2">Name <br />{props.nombreplaneta} </div>
                <div className="col-sm-2">Climate <br /> {props.climate}</div>
                <div className="col-sm-2">Population<br />{props.population}</div>
                <div className="col-sm-2">Orbital Period<br />{props.orbitalperiod}</div>
                <div className="col-sm-2">Rotation Period <br />{props.rotationperiod}</div>
                <div className="col-sm-2">Diameter <br />{props.diameter}</div>
              </div>
            </div>
          </div>  
	);
};
