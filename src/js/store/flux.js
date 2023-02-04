import { useParams } from "react-router";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            people: [],
            planeta: [],
            vehiculo: [],
            caracter: {},
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {


                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            obtenerinfoPersonajes: () => {
                
                    fetch("https://swapi.dev/api/people")
		.then(res => res.json())
		.then(data => setStore({
            people: data.results
        }))
		.catch(err => console.error(err))
                    },

              obtenerinfoPlaneta() {
                         fetch("https://www.swapi.tech/api/planets/")
                       .then(res => res.json())
                      .then(data => setStore({
                          planeta:data.results}))
                       .catch(err => console.error(err))
                    },      

            obtenerinfoVehiculo() {
                        fetch("https://www.swapi.tech/api/vehicles/")
                       .then(res => res.json())
                        .then(data => setStore({
                          vehiculo:data.results}))
                        .catch(err => console.error(err))
                    },

                
                    obtenerinfodetalladoPersonaje(theid) {
                        console.log(theid)
                        fetch("https://www.swapi.tech/api/people/"+theid)
                        .then(res => res.json())
                        .then(data => setStore({
                            caracter:data.result}))
                        .catch(err => console.error(err))
                    },
                

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;