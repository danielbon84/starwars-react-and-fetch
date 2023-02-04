import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardHorizontal } from "../component/cardhorizontal.jsx";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	
	const params = useParams();
	console.log(params.theid); 
	console.log(params);

	useEffect(()=>{
            actions.obtenerinfodetalladoPersonaje(params.theid);

      },[params.theid])
	console.log(store.character)

	return (
        <div className="container">
              <CardHorizontal nombre={store.character?.name}
            //    descripcion={store.caracter[params]?.description}
            //   nacimiento={store.caracter[params]?.birth_year}
            //   sexo={store.caracter[params]?.gender}
            //   altura={store.caracter[params]?.height}
            //   pelo={store.caracter[params]?.hair_color}
            //   ojos={store.caracter[params]?.eye_color}
             />
          </div>
	);
};

Demo.propTypes = {
	match: PropTypes.object
};