import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<p><img className="ms-4" src={Logo} alt="" /></p>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				
				<div class="btn-group">
  <button type="button" class="btn btn-primary me-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

				</Link>
			</div>
		</nav>
	);
};
