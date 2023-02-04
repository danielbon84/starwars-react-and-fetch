import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontalVehiculo } from "../component/cardhorizontal3.jsx";

export const Demovehiculo = () => {
	const { store, actions } = useContext(Context);
	const[infoVehiculo, setInfoVehiculo]=useState({})
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

	

	useEffect(()=>{
		obtenerinfoVehiculo()
	},[])
console.log("24",infoVehiculo)
console.log("25",infoVehiculo.description);    
console.log("26",infoVehiculo.properties);
console.log("27",infoVehiculo.properties?.name);

	return (
        <div className="container">
              <CardHorizontalVehiculo nombrevehiculo={infoVehiculo.properties?.name}
              descripcionvehiculo={infoVehiculo.properties?.descripcion_vehiculo}
             model={infoVehiculo.properties?.model}
             length ={infoVehiculo.properties?.length}
             passengers={infoVehiculo.properties?.passengers}
             crew={infoVehiculo.properties?.crew}
              />
          </div>
	);
};

Demovehiculo.propTypes = {
	match: PropTypes.object
};