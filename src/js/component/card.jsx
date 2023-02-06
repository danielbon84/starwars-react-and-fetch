import React from "react";
import { Link } from "react-router-dom";



const Card = (props) => {
	return (
     <div className="container col-xs-12 col-md-4 col-3 m-2">
		  <div className="card" style={{width: "22rem"}}>
      
      * <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="card-img-top" alt="..."/> 
         <div className="card-body">
         <h4 className="card-title">{props.nombre} </h4>
          <p className="card-text">
            <br /> Gender:{props.gender}
            <br /> Hair Color: {props.hairColor}
            <br /> Eye Color:  {props.eyesColor}
          </p>
          
          <Link to={"/demo/"+props.id}  className="btn  btn-outline-warning me-4 ms-3">Learn More!</Link>
         
          <div className="col-6">
         <button type="button" onClick={() => actions.agregarFavoritos(props.nombre)} className="btn btn-outline-warning ms-5"><i className="fa fa-heart" /></button>
         </div>
         </div>
     </div>
			</div>
		
	);
};

export default Card