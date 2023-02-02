import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";

export const CardHorizontalplaneta1 = (props) => {
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-xs-12 col-md-4 col-4">
            <img src={logo} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-xs-12 col-md-8 col-8">
            <div className="card-body">
              <h1 className="fs-1">{props.nombreplaneta}</h1>
              <p className="card-text"> {props.descripcionplaneta}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="container text-center text-white border-top-warning ">
                <div className="row border-top-warning">
                <div className="col">Name <br />{props.nombreplaneta} </div>
                <div className="col">Climate <br /> {props.climate}</div>
                <div className="col">Population<br />{props.population}</div>
                <div className="col">Orbital Period<br />{props.orbitalperiod}</div>
                <div className="col">Rotation Period <br />{props.rotationperiod}</div>
                <div className="col">Diameter <br />{props.diameter}</div>
              </div>
            </div>
          </div>  
	);
};
