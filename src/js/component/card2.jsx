import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hombre.jpg";


const Card2 = (props) => {
	return (
     <div className="container col-xs-12 col-md-4 col-3 m-2">
		  <div className="card" style={{width: "22rem"}}>
         <img src={"https://starwars-visualguide.com/assets/img/planets/"+props.id+".jpg"} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="card-text">
            <br /> Population:{props.poblacion}
            <br /> Terrain: {props.terreno}
          </p>
          
          <Link to={"/demoplaneta/"+props.id}  className="btn btn-outline-primary me-4 ms-3">Learn More!</Link>
         
         <button type="button" className="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
     </div>
			</div>
		
	);
};

export default Card2
