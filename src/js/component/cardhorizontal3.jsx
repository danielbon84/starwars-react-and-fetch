import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";

export const CardHorizontalVehiculo = (props) => {
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-xs-12 col-md-4 col-4">
            <img src={logo} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-xs-12 col-md-8 col-8">
            <div className="card-body">
              <h1 className="fs-1">{props.nombrevehiculo}</h1>
              <p className="card-text"> {props.descripcionvehiculo}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="container text-center text-white border-top-warning ">
                <div className="row border-top-warning">
                <div className="col">Name <br />{props.nombrevehiculo} </div>
                <div className="col">Descripcion vehiculo <br /> {props.descripcionvehiculo}</div>
                <div className="col">Model<br />{props.model}</div>
                <div className="col">Lenght<br />{props.lenght}</div>
                <div className="col">Passengers <br />{props.passengers}</div>
                <div className="col">Crew <br />{props.crew}</div>
              </div>
            </div>
          </div>  
	);
};
