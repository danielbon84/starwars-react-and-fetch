import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";

export const CardHorizontalVehiculo = (props) => {
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={logo} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="card-body">
              <h1 className="fs-1">{props.nombrevehiculo}</h1>
              <p className="card-text"> {props.descripcionvehiculo}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="container text-center text-white border-top-warning ">
                <div className="row border-top-warning">
                <div className="col-sm-2">Name <br />{props.nombrevehiculo} </div>
                <div className="col-sm-2">Cost_in_credits <br /> {props.cost_in_credits}</div>
                <div className="col-sm-2">Model<br />{props.model}</div>
                <div className="col-sm-2">Manufacturer<br />{props.manufacturer}</div>
                <div className="col-sm-2">Passengers <br />{props.passengers}</div>
                <div className="col-sm-2">Crew <br />{props.crew}</div>
              </div>
            </div>
          </div>  
	);
};
