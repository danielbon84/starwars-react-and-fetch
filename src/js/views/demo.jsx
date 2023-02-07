import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal } from "../component/cardhorizontal.jsx";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	
	const params = useParams();
	// console.log(params.theid); 
	// console.log(params);

	useEffect(()=>{
            actions.obtenerinfodetalladoPersonaje(params.theid);

      },[params.theid])
	// console.log(store.character.properties?.eye_color)

      // console.log(store.character.description )
	return (
        <div className="container">
              <CardHorizontal nombre={store.character.properties?.name}
               descripcion={store.character.description}
              nacimiento={store.character.properties?.birth_year}
              sexo={store.character.properties?.gender}
              altura={store.character.properties?.height}
              //pelo={store.character[params]?.hair_color}
              ojos={store.character.properties?.eye_color}
              colorpiel={store.character.properties?.skin_color}
             />
          </div>
	);
};

Demo.propTypes = {
	match: PropTypes.object
};