import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontalVehiculo } from "../component/cardhorizontal3.jsx";

export const Demovehiculo = () => {
	const { store, actions } = useContext(Context);
	
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

	

	useEffect(()=>{
		actions.obtenerinfodetalladoVehiculo(params.theid);
	},[params.theid])
	console.log(store.marcas)
// console.log("24",infoVehiculo)
// console.log("25",infoVehiculo.description);    
// console.log("26",infoVehiculo.properties);
// console.log("27",infoVehiculo.properties?.name);

	return (
        <div className="container">
              <CardHorizontalVehiculo nombrevehiculo={store.marcas.properties?.name}
              descripcion={store.marcas.descripcion}
             model={store.marcas.properties?.model}
             length ={store.marcas.properties?.length}
             passengers={store.marcas.properties?.passengers}
             crew={store.marcas.properties?.crew}
              />
          </div>
	);
};

Demovehiculo.propTypes = {
	match: PropTypes.object
};