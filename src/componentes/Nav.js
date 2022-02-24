import "../styles/Nav.scss";
import titulo from "../assets/img/titulonuevo.png";
import ver from "../assets/img/ver.png";
import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="nav">
			<div className="contenedor-titulo">
				<Link to="/">
					<img src={titulo} alt="titulo Rick and Morty"></img>
				</Link>
			</div>
			<div className="contenedor-link">
				<ul>
					<li>
						<Link to="/personajes">Character</Link>
					</li>
					<li>
						<Link to="/episodios">Episode</Link>
					</li>
					<li>
						<Link to="/ubicacion">Location</Link>
					</li>
				</ul>
			</div>
			<div className="contenedor-imagen">
				<img src={ver}></img>
			</div>
		</nav>
	);
};

export default Nav;
