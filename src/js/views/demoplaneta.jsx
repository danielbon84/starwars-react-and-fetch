import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontalplaneta1 } from "../component/cardhorizontal2.jsx";

export const Demoplaneta = () => {
	const { store, actions } = useContext(Context);
	const[infoPlaneta, setInfoPlaneta]=useState({})
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

	

	useEffect(()=>{
		obtenerinfoPlaneta()
	},[])
console.log("24",infoPlaneta)
console.log("25",infoPlaneta.description);    
console.log("26",infoPlaneta.properties);
console.log("27",infoPlaneta.properties?.name);

	return (
        <div className="container">
              <CardHorizontalplaneta1 nombreplaneta={infoPlaneta.properties?.name}
              climate={infoPlaneta.properties?.climate}
             population={infoPlaneta.properties?.population}
             orbitalperiod ={infoPlaneta.properties?.orbital_period}
             rotationperiod={infoPlaneta.properties?.rotation_period}
             diameter={infoPlaneta.properties?.diameter}
              />
          </div>
	);
};

Demoplaneta.propTypes = {
	match: PropTypes.object
};