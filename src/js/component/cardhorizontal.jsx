import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";

export const CardHorizontal = (props) => {
  console.log(props.name)
    return (
<div className="card mb-3 text-center p-5 m-5" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={logo} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="card-body">
              <h1 className="fs-1">{props.nombre}</h1>
              <p className="card-text"> {props.descripcion}</p>
        </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="container text-center text-white border-top-warning ">
                <div className="row border-top-warning">
                <div className="col-sm-2">Name <br />{props.nombre} </div>
                <div className="col-sm-2">Birth Year <br /> {props.nacimiento}</div>
                <div className="col-sm-2">Gender <br />{props.sexo}</div>
                <div className="col-sm-2">Height <br />{props.altura}</div>
                <div className="col-sm-2">Skin Color <br />{props.colorpiel}</div>
                <div className="col-sm-2">Eye Color <br />{props.ojos}</div>
              </div>
            </div>
          </div>  
	);
};
