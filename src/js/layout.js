import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home.js";
import { Demo } from "./views/demo.jsx";
import { Demoplaneta } from "./views/demoplaneta.jsx";
import { Demovehiculo } from "./views/demovehiculo.jsx";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo/:theid" element={<Demo />} />
						<Route path="/demoplaneta/:theid" element={<Demoplaneta />} />
						<Route path="/demovehiculo/:theid" element={<Demovehiculo />} />
						<Route path="/single" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
